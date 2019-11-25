import * as React from 'react';
import { LoginFormReactive } from './login-form.reactive';
import { FirebaseReactive } from '../firebase/firebase.reactive';
import { toastReactive } from '../swal/swal.reactive';
import { UserData } from '../../exports/model/user-data.model';
import { FormRecoverPasswordReactive } from './form-recover-password.reactive';
import { Card, Col, Row } from 'react-bootstrap';
import { FormRegisterUserReactive } from './form-register-user.reactive';
import { keyReactive } from '../key/key.reactive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Cookies } from '../../exports/cookies.export';
import { Cryptr } from '../../exports/cryptr.export';

interface Props { 
  className?: string;
  classSpinner?: string;
  classIcon?: string;
  classLogin?: string;
  classRegist?: string;
  classGoogle?: string;
  classRecover?: string;
  classCancelRecover?: string;
  classImageRegist?: string;
  classRegistForm?: string;
  classCancelRegist?: string;
  textLoginMessage: string;
  textRegistMessage: string;
  iconUrl?: string;
  defaultUserRol?: number;
  googleSingin?: boolean;
  showImage?: boolean;
  showNickName?: boolean;
  showPhoneNumber?: boolean;
  useCookies?: boolean;
  regist?: boolean;
  recover?: boolean;
  onLogin: Function;
  onRegist: Function;
}

interface State { 
  isLoadig: boolean;
  caseShow: number;
  cssAnimation: string;
  isLoadingRegist: boolean;
  isAutoLogin: any;
}

export class RenderLoginReactive extends React.Component<Props,State> {
  
  firebase: FirebaseReactive = new FirebaseReactive();
  
  constructor(props: Props) {
    super(props);

    this.state = {
      isLoadig: false,
      caseShow: 0,
      cssAnimation: '',
      isLoadingRegist: false,
      isAutoLogin: null
    }
  }

  componentDidMount() {
    this.loginWithCookies();
  }

  private logIn(formData: any): void {
    const { onLogin } = this.props;

    this.setState({ isLoadig: true });
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
            role: data.role,
            active: data.active
          });
          
          onLogin(finalUserData);
          this.setCookieUser(formData.email, formData.password);
          toastReactive(
            'success', 
            this.getLoginMessage(finalUserData), 
            'bottom'
          );
        });
      },
      (error: any) => {
        toastReactive(
          'error', 
          this.getErrorMessage(error), 
          'bottom'
        );
        this.setState({ isLoadig: false, isAutoLogin: null });
      }
    );
  }

  private logInGoogle(): void {
    const { onLogin, defaultUserRol } = this.props;

    this.setState({ isLoadig: true });
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
                role: userData.role,
                from: 'google',
                active: userData.active
              });

              onLogin(finalUserData, token);
              this.setState({ isLoadig: false });
              toastReactive(
                'success', 
                this.getLoginMessage(finalUserData), 
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
                photoURL: fireData.photoURL,
                from: 'google',
                role: defaultUserRol ? defaultUserRol : -1
              });

              this.firebase.update(`userData/${fireData.uid}`, finalUserData);
              onLogin(finalUserData, token);
              this.setState({ isLoadig: false });
              toastReactive(
                'success', 
                this.getLoginMessage(finalUserData), 
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
    const { showImage } = this.props;
    this.setState({ isLoadingRegist: true });

    this.firebase.createUserWithEmailAndPassword(
      formData.email,
      formData.password,
      (fireData: any) => {
        if (showImage === false) {
          this.registUser(formData, fireData);
        } else {
          this.firebase.putStorage(`/user-img/${keyReactive()}`, formData.photoURL, (url: string) => {
            this.registUser(formData, fireData, url);
          });
        }
      },
      (error: any) => {
        toastReactive(
          'error', 
          this.getErrorMessage(error, true), 
          'bottom'
        );
        this.setState({ isLoadingRegist: false });
      }
    );
  }

  private registUser(formData: any, fireData: any, url?: string): void {
    const { onRegist, defaultUserRol } = this.props;
    
    const finalUserData: UserData = new UserData({
      uid: fireData.uid ? fireData.uid : '',
      displayName: formData.nickName ? formData.nickName : '',
      name: formData.name,
      lastName: formData.lastName,
      email: formData.email,
      phoneNumber: formData.phoneNumber ? formData.phoneNumber : '',
      photoURL: url ? url : '',
      role: defaultUserRol ? defaultUserRol : -1
    });

    this.firebase.update(`userData/${fireData.uid}`, finalUserData);
    
    onRegist(finalUserData);
    this.setCookieUser(formData.email, formData.password);
    this.setState({ isLoadingRegist: false, caseShow: 0 });
    toastReactive(
      'success', 
      this.getRegistMessage(finalUserData), 
      'bottom'
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
        this.setState({ caseShow: 0 });
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
      case 'auth/network-request-failed': return 'Hubo un problema de red al iniciar sesión';
    }

    return isRegist ? 'Hubo un problema al registrar el usuario' : 'Hubo un problema al iniciar sesión';
  }

  private setCookieUser(email: string, password: string): void {
    const { useCookies } = this.props;
    if (useCookies) {
      const cryptr = new Cryptr('reactive-secret');
      Cookies.set('userData', JSON.stringify({ email, password: cryptr.encrypt(password) }));
    }
  }

  private getCookieUser(): any {
    const { useCookies } = this.props;
    const cryptr = new Cryptr('reactive-secret');
    const cookieData = Cookies.get('userData');

    if (cookieData && useCookies) {
      const { email, password } = JSON.parse(cookieData);
      return { email, password: cryptr.decrypt(password) };
    } 

    return null;
  }

  private getLoginMessage(userData: UserData): string {
    const { textLoginMessage } = this.props;
    const result: any = textLoginMessage.match(/\$\((.*?)\)/g);
    const finalKey: string = result ? result[0].replace('$(','').replace(')','') : '';
    return textLoginMessage.replace(`$(${finalKey})`,userData[finalKey]);
  }

  private getRegistMessage(userData: UserData): string {
    const { textRegistMessage } = this.props;
    const result: any = textRegistMessage.match(/\$\((.*?)\)/g);
    const finalKey: string = result ? result[0].replace('$(','').replace(')','') : '';
    return textRegistMessage.replace(`$(${finalKey})`,userData[finalKey]);
  }

  private loginWithCookies(): void {
    const { useCookies } = this.props;
    const cookesData = this.getCookieUser();
    
    if (cookesData && useCookies) {
      this.setState({ isAutoLogin: this.getCookieUser() });
      this.logIn(this.getCookieUser());
    }
  }

  render() {
    const {
      className,
      classSpinner,
      classRegist,
      classLogin,
      classGoogle,
      classIcon,
      classRecover,
      classCancelRecover,
      classRegistForm,
      classCancelRegist,
      classImageRegist,
      iconUrl,
      showImage,
      showNickName,
      showPhoneNumber,
      googleSingin,
      regist,
      recover
    } = this.props;
    const { isLoadig, caseShow, cssAnimation, isLoadingRegist, isAutoLogin } = this.state;

    return (
      <Row className="justify-content-center">
        <Col md={ 6 }>
          {
            caseShow === -1 && 
              <Card className={ `login-container ${className} login-in` }>
                <FormRegisterUserReactive
                  classSpinner={ classSpinner }
                  classRegistForm={ classRegistForm ? classRegistForm : 'btn btn-outline-info' }
                  classCancelRegist={ classCancelRegist ? classCancelRegist : 'btn btn-outline-danger' }
                  classImageRegist={ classImageRegist ? classImageRegist : 'btn btn-outline-dark' }
                  submitActions={ (formData: any) => this.onRegist(formData) }
                  cancel={ () => this.setState({ caseShow: 0, cssAnimation: 'login-in' }) }
                  isLoading={ isLoadingRegist }
                  showImage={ showImage === undefined ? true : showImage }
                  showNickName={ showNickName === undefined ? true : showNickName }
                  showPhoneNumber={ showPhoneNumber === undefined ? true : showPhoneNumber }
                />
              </Card>
          }

          {
            caseShow === 0 && 
              <Card className={ `login-container ${className} ${cssAnimation}` }>
                {
                  isAutoLogin ?
                    <div className="text-center">
                      <h3>Iniciando sesión</h3>
                      <FontAwesomeIcon className={ `${classSpinner} mt-4`} icon="spinner" size="3x" spin/>
                    </div>
                  :
                    <LoginFormReactive
                      classSpinner={ classSpinner }
                      classRegist={ classRegist ? classRegist : 'btn btn-outline-info' }
                      classLogin={ classLogin ? classLogin : 'btn btn-outline-success' }
                      classGoogle={ classGoogle ? classGoogle : 'btn btn-outline-dark' }
                      classIcon={ classIcon }
                      iconUrl={ iconUrl }
                      submitActions={ (formData: any) => this.logIn(formData) }
                      onGoogle={ () => this.logInGoogle() }
                      cancel={ () => this.setState({ caseShow: -1 }) }
                      isLoading={ isLoadig }
                      googleSingin={ googleSingin }
                      recoverPassword={ () => this.setState({ caseShow: 1 }) }
                      regist={ regist }
                      recover={ recover }
                    />
                }
              </Card>
          }
          
          {
            caseShow === 1 &&
              <Card className={ `login-container ${className} login-in` }>
                <FormRecoverPasswordReactive 
                  submitActions={ (formData: any) => this.recoverPassword(formData) }
                  cancel={ () => this.setState({ caseShow: 0, cssAnimation: 'login-in' }) }
                  classRecover={ classRecover ? classRecover : 'btn btn-outline-info' }
                  classCancelRecover={ classCancelRecover ? classCancelRecover : 'btn btn-outline-danger'}
                />
              </Card>
          }
        </Col>
      </Row>
    );
  }
}