import * as React from 'react';
import { LoginFormReactive } from './login-form.reactive';
import { FirebaseReactive } from '../firebase/firebase.reactive';
import { toastReactive } from '../swal/swal.reactive';

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

  loginText: string;


  googleSingin?: boolean;


  onLogin: Function;
  onRegist: Function;
}

interface State { }

export class RenderLoginReactive extends React.Component<Props,State> {
  
  firebase: FirebaseReactive = new FirebaseReactive();
  
  private logIn(formData: any): void {
    this.firebase.signInWithEmailAndPassword(formData.email, formData.password, 
      (userData: any) => {
        console.log(userData.providerData[0]);
        toastReactive('success', JSON.stringify(userData.providerData[0]), 'bottom');
      },
      (error: any) => {
        console.log(error);
        toastReactive('error', error, 'bottom');
      }
    );
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

    return (
      <>
        <LoginFormReactive
          className={ className }
          classRegist={ classRegist }
          classSubmit={ classLogin }
          classIcon={ classIcon }
          iconUrl={ iconUrl }

          submitActions={ (formData: any) => this.logIn(formData) }
          cancel={ () => console.log('Cancelo') }
          isLoading={ true }

          textUser={ textUser }
          textPassword={ textpassword }
          textRegist={ textRegist }
          textLogin={ textLogin }
          textGoogle={ textGoogle }
          
          textPasswordLost={ textPasswordLost }

          googleSingin={ googleSingin }
        />
      </>
    );
  }
}