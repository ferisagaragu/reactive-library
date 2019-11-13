import * as React from 'react';
import { LoginFormReactive } from './login-form.reactive';
import { FirebaseReactive } from '../firebase/firebase.reactive';
import { toastReactive } from '../swal/swal.reactive';
import { UserData } from '../../exports/model/user-data.model';
import { ModalReactive } from '../modal/modal.reactive';
import { FormRecoverPasswordReactive } from './form-recover-password.component';

interface Props { 
  className?: string;
  classIcon?: string;
  classLogin?: string;
  classRegist?: string;
  classGoogle?: string;
  
  
  iconUrl: string;

  textUser: string;
  textpassword: string;
  textRegist: string;
  textLogin: string;
  textGoogle: string;
  textPasswordLost: string;

  textLoginMessage: string;


  googleSingin?: boolean;


  onLogin: Function;
  onRegist: Function;
}

interface State { 
  isLoadig: boolean;
  showModal: boolean;
}

export class RenderLoginReactive extends React.Component<Props,State> {
  
  firebase: FirebaseReactive = new FirebaseReactive();
  
  constructor(props: Props) {
    super(props);

    this.state = {
      isLoadig: false,
      showModal: false
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

  private recoverPassword(formData: any): void {
    console.log(formData);
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

  private getErrorMessage(error: string): string {
    switch (error) {
      case 'auth/user-not-found': return 'El usuario ingresado no esta registrado';
      case 'auth/wrong-password': return 'La contraseña ingresada no es valida'
    }

    return 'Hubo un problema al iniciar sesión';
  }

  render() {
    const {
      className,
      classRegist,
      classLogin,
      classIcon,
      iconUrl,

      textUser,
      textpassword,
      textRegist,
      textLogin,
      textGoogle,
      textPasswordLost,

      googleSingin

    } = this.props;
    const { isLoadig, showModal } = this.state;

    return (
      <>
        <ModalReactive 
          title="Recuperar contraseña"
          modalShow={ showModal }
          onHide={ () => this.setState({ showModal: false }) }
          size="lg"
          centered={ true }
        >
          <FormRecoverPasswordReactive 
            submitActions={ (formData: any) => this.recoverPassword(formData) }
            cancel={ () => this.setState({ showModal: false }) }
          />
        </ModalReactive>

        <LoginFormReactive
          className={ className }
          classRegist={ classRegist }
          classSubmit={ classLogin }
          classIcon={ classIcon }
          iconUrl={ iconUrl }

          submitActions={ (formData: any) => this.logIn(formData) }
          onGoogle={ () => this.logInGoogle() }
          cancel={ () => console.log('Cancelo') }
          isLoading={ isLoadig }

          textUser={ textUser }
          textPassword={ textpassword }
          textRegist={ textRegist }
          textLogin={ textLogin }
          textGoogle={ textGoogle }
          
          textPasswordLost={ textPasswordLost }

          googleSingin={ googleSingin }
          recoverPassword={ () => this.setState({ showModal: true }) }
        />
      </>
    );
  }
}