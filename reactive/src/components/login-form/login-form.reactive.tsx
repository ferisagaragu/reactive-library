import * as React from 'react';
import { Field, reduxForm } from '../../exports/redux.export';
import { RenderTextFieldReactive } from '../redux-form/redux-render-text-field.reactive';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GoogleIcon } from './res/google.icon';
import { SpaceReactive } from '../space/space.reactive';

interface Props { 
  classLogin: string;
  classRegist: string;
  classGoogle: string;
  classIcon: string;
  handleSubmit: any;
  cancel: any;
  submitting: any;
  isLoading: boolean;
  iconUrl: string;
  textEmail: string;
  textPassword: string;
  textRegist: React.ReactElement;
  textLogin: React.ReactElement;
  textGoogle: React.ReactElement;
  textPasswordLost: React.ReactElement;
  googleSingin?: boolean;
  onGoogle: Function;
  submitActions: Function;
  recoverPassword: Function;
}

interface State { }

class LoginForm extends React.Component<Props, State> {
  render() {
    const { 
      classIcon,
      classLogin,
      classRegist, 
      classGoogle,


      handleSubmit, 
      cancel, 
      submitting, 
      submitActions, 
      isLoading, 
      iconUrl, 
      
      textEmail,
      textPassword,
      textRegist, 
      textLogin,
      textGoogle,
      textPasswordLost,

      googleSingin,
      onGoogle,

      recoverPassword
    } = this.props;
    
    return (
      <form onSubmit={ handleSubmit(submitActions) }>
        <Row>
          <Col md={ 12 } className="text-center mb-3">
            <img className={ `${classIcon} r-login-icon` } alt="login logo" src={ iconUrl } />
          </Col>
        </Row>

        <Field
          className="form-control r-login-user-name"
          name="email"
          type="email"
          component={ RenderTextFieldReactive }
          label={ textEmail }
          disabled={ isLoading }
        />

        <Field 
          className="form-control r-login-password"
          name="password"
          type="password"
          component={ RenderTextFieldReactive }
          label={ textPassword }
          disabled={ isLoading }
        />

        {
          !isLoading ?
            <>
              <div className="text-center mt-4">
                <button
                  className={ `mr-3 ${classRegist} r-login-regist` } 
                  type="button" 
                  onClick={ () => cancel() }
                >
                  { textRegist }
                </button>

                <button 
                  className={ `${classLogin} r-login-login` }
                  type="submit" 
                  disabled={ submitting }
                >
                  { textLogin }
                </button>
              </div>

              {
                googleSingin &&
                <div className="text-center mt-3 mb-3">
                  <button 
                    className={ `${classGoogle} r-login-google` }
                    type="button"
                    onClick={ () => onGoogle() }
                  > 
                    <GoogleIcon />
                    <SpaceReactive spaces={ 2 } />
                    { textGoogle }
                  </button>
                </div>
              } 

              <div className="text-center mt-2">
                <button className="login-recover-password" type="button" onClick={ () => recoverPassword() }>
                  { textPasswordLost }
                </button>
              </div>
            </>
          : 
            <div className="text-center r-login-spinner">
              <FontAwesomeIcon icon="spinner" size="2x" spin />
            </div>
        }
      </form>
    );
  }
}

const validate = (values: any) => {
  const errors = {
    email: '',
    password: ''
  }
  
  if (!values.email) {
    errors.email = 'El correo electrónico es requerido';
  }

  if (!values.password) {
    errors.password = 'La contraseña es requerida';
  }

  return errors
}

export const LoginFormReactive = reduxForm({
  form: 'loginForm',
  validate
})(LoginForm);