import * as React from 'react';
import { LoginFormReactive } from './login-form.reactive';
import { FirebaseReactive } from '../firebase/firebase.reactive';
import { toastReactive } from '../swal/swal.reactive';
import { UserData } from '../../exports/model/user-data.model';
import { FormRecoverPasswordReactive } from './form-recover-password.reactive';
import { Card } from 'react-bootstrap';
import { FormRegisterUserReactive } from './form-register-user.reactive';
import { keyReactive } from '../key/key.reactive';

interface Props { 
  className?: string;
  classIcon?: string;
  classLogin?: string;
  classRegist?: string;
  classGoogle?: string;
  classRecover?: string;
  classCancelRecover?: string;
  classRegistForm?: string;
  classCancelRegist?: string;
  

  iconUrl: string;

  textEmail: string;
  textpassword: string;

  textRegist: React.ReactElement;
  textLogin: React.ReactElement;
  textGoogle: React.ReactElement;
  textPasswordLost: React.ReactElement;

  textLoginMessage: string;

  textCancelRecover: React.ReactElement;
  textRecover: React.ReactElement;

  textRegistForm: React.ReactElement;
  textCancelRegist: React.ReactElement;

  googleSingin?: boolean;


  onLogin: Function;
  onRegist: Function;
}

interface State { 
  isLoadig: boolean;
  caseShow: number;
  cssAnimation: string;
  isLoadingRegist: boolean;
}

export class RenderLoginReactive extends React.Component<Props,State> {
  
  firebase: FirebaseReactive = new FirebaseReactive();
  
  constructor(props: Props) {
    super(props);

    this.state = {
      isLoadig: false,
      caseShow: 0,
      cssAnimation: '',
      isLoadingRegist: false
    }
  }

  private logIn(formData: any): void {
    const { onLogin, textLoginMessage } = this.props;

    this.setState({ isLoadig: true });
    const result: any = textLoginMessage.match(/\$\((.*?)\)/g);
    const finalKey: string = result ? result[0].replace('$(','').replace(')','') : '';

    this.firebase.signInWithEmailAndPassword(formData.email, formData.password, 
      (userData: any) => {
        this.firebase.once(`userData/${userData.uid}`, (fireData: any) => {
          const data: any = fireData.val();
          const finalUserData: UserData = new UserData({
            uid: data.uid,
            displayName: data.displayName,
            name: data.name,
            lastName: data.lastName,
            email: data.email,
            phoneNumber: data.phoneNumber,
            photoURL: data.photoURL,
            role: data.role
          });
          
          toastReactive(
            'success', 
            finalKey ? 
              finalUserData[finalKey] 
            : 
              finalUserData.displayName, 
            'bottom'
          );
          onLogin(finalUserData);
          this.setState({ isLoadig: false });
        });
      },
      (error: any) => {
        toastReactive(
          'error', 
          this.getErrorMessage(error), 
          'bottom'
        );
        this.setState({ isLoadig: false });
      }
    );
  }

  private logInGoogle(): void {
    const { onLogin, textLoginMessage } = this.props;

    this.setState({ isLoadig: true });
    const result: any = textLoginMessage.match(/\$\((.*?)\)/g);
    const finalKey: string = result ? result[0].replace('$(','').replace(')','') : '';

    this.firebase.signInWithGooglePopup(
      (token: any, fireData: any) => {
        this.firebase.once(`userData/${fireData.uid}`,
          (data: any) => {
            const userData = data.val();
            
            if (userData) {
              const finalUserData: UserData = new UserData({
                uid: userData.uid,
                displayName: userData.displayName,
                name: userData.name,
                lastName: userData.lastName,
                email: userData.email,
                phoneNumber: userData.phoneNumber,
                photoURL: userData.photoURL,
                role: userData.role
              });

              onLogin(finalUserData, token);
              this.setState({ isLoadig: false });
              toastReactive(
                'success', 
                finalKey ? 
                  finalUserData[finalKey] 
                : 
                  finalUserData.displayName, 
                'bottom'
              );
            } else {
              const finalUserData: UserData = new UserData({
                uid: fireData.uid,
                displayName: fireData.displayName,
                name: fireData.displayName,
                lastName: '',
                email: fireData.email,
                phoneNumber: fireData.phoneNumber,
                photoURL: fireData.photoURL
              });

              this.firebase.update(`userData/${fireData.uid}`, finalUserData);
              onLogin(finalUserData, token);
              this.setState({ isLoadig: false });
              toastReactive(
                'success', 
                finalKey ? 
                  finalUserData[finalKey] 
                : 
                  finalUserData.displayName, 
                'bottom'
              );
            }
          }
        );
      }, (error: any) => {
        toastReactive(
          'error', 
          this.getErrorMessage(error), 
          'bottom'
        );
        this.setState({ isLoadig: false });
      }
    );
  }

  private onRegist(formData: any): void {
    const { onRegist, textLoginMessage } = this.props;
    this.setState({ isLoadingRegist: true });

    this.firebase.createUserWithEmailAndPassword(
      formData.email,
      formData.password,
      (fireData: any) => {
        const result: any = textLoginMessage.match(/\$\((.*?)\)/g);
        const finalKey: string = result ? result[0].replace('$(','').replace(')','') : '';

        this.firebase.putStorage(`/user-img/${keyReactive()}`, formData.photoURL, (url: string) => {
          const finalUserData: UserData = new UserData({
            uid: fireData.uid ? fireData.uid : '',
            displayName: formData.nickName,
            name: formData.name,
            lastName: formData.lastName,
            email: formData.email,
            phoneNumber: formData.phoneNumber,
            photoURL: url
          });
  
          this.firebase.update(`userData/${fireData.uid}`, finalUserData);
          
          onRegist(finalUserData);
          this.setState({ isLoadingRegist: false, caseShow: 0 });
          toastReactive(
            'success', 
            finalKey ? 
              finalUserData[finalKey] 
            : 
              finalUserData.displayName, 
            'bottom'
          );
        });
      },
      (error: any) => {
        console.log(error);
        toastReactive(
          'error', 
          this.getErrorMessage(error, true), 
          'bottom'
        );
        this.setState({ isLoadingRegist: false });
      }
    );
  }

  private recoverPassword(formData: any): void {
    this.firebase.sendPasswordResetEmail(formData.email, 
      () => {
        toastReactive(
          'success', 
          `Se envío el correo de recuperación a ${formData.email}`, 
          'bottom'
        );
      }, () => {
        toastReactive(
          'error', 
          'Hubo un problema al enviar el correo de recuperación', 
          'bottom'
        );
      } 
    );
  }

  private getErrorMessage(error: string, isRegist?: boolean): string {
    switch (error) {
      case 'auth/user-not-found': return 'El correo electrónico ingresado no esta registrado';
      case 'auth/wrong-password': return 'La contraseña ingresada no es valida'
      case 'auth/email-already-in-use': return 'El correo electrónico ingresado ya esta registrado';
    }

    return isRegist ? 'Hubo un problema al registrar el usuario' : 'Hubo un problema al iniciar sesión';
  }

  render() {
    const {
      className,
      classRegist,
      classLogin,
      classIcon,
      classRecover,
      classCancelRecover,
      classRegistForm,
      classCancelRegist,

      iconUrl,

      textEmail,
      textpassword,

      textRegist,
      textLogin,
      textGoogle,
      textPasswordLost,

      textCancelRecover,
      textRecover,

      textRegistForm,
      textCancelRegist,

      googleSingin
    } = this.props;
    const { isLoadig, caseShow, cssAnimation, isLoadingRegist } = this.state;

    return (
      <>
        {
          caseShow === -1 && 
            <Card className={ `login-container ${className} login-in` }>
              <FormRegisterUserReactive
                classRegistForm={ classRegistForm }
                classCancelRegist={ classCancelRegist }
                submitActions={ (formData: any) => this.onRegist(formData) }
                cancel={ () => this.setState({ caseShow: 0, cssAnimation: 'login-in' }) }
                textRegistForm={ textRegistForm }
                textCancelRegist={ textCancelRegist }
                isLoading={ isLoadingRegist }
              />
            </Card>
        }

        {
          caseShow === 0 && 
            <Card className={ `login-container ${className} ${cssAnimation}` }>
              <LoginFormReactive
                classRegist={ classRegist }
                classSubmit={ classLogin }
                classIcon={ classIcon }
                iconUrl={ iconUrl }

                submitActions={ (formData: any) => this.logIn(formData) }
                onGoogle={ () => this.logInGoogle() }
                cancel={ () => this.setState({ caseShow: -1 }) }
                isLoading={ isLoadig }

                textEmail={ textEmail }
                textPassword={ textpassword }

                textRegist={ textRegist }
                textLogin={ textLogin }
                textGoogle={ textGoogle }
                textPasswordLost={ textPasswordLost }

                googleSingin={ googleSingin }
                recoverPassword={ () => this.setState({ caseShow: 1 }) }
              />
            </Card>
        }
        
        {
          caseShow === 1 &&
            <Card className={ `login-container ${className} login-in` }>
              <FormRecoverPasswordReactive 
                submitActions={ (formData: any) => this.recoverPassword(formData) }
                cancel={ () => this.setState({ caseShow: 0, cssAnimation: 'login-in' }) }
                classRecover={ classRecover }
                classCancelRecover={ classCancelRecover }
                textCancelRecover={ textCancelRecover }
                textRecover={ textRecover }
              />
            </Card>
        }
      </>
    );
  }
}