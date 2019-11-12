import * as React from 'react';
import { Field, reduxForm } from '../../exports/redux.export';
import { RenderTextFieldReactive } from '../redux-form/redux-render-text-field.reactive';
import { Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GoogleIcon } from './res/google.icon';
import { SpaceReactive } from '../space/space.reactive';

interface Props { 
  className: string;
  classLogin: string;
  classRegist: string;
  classGoogle: string;
  classIcon: string;
  handleSubmit: any;
  cancel: any;
  submitting: any;
  isLoading: boolean;
  iconUrl: string;
  textUser: string;
  textPassword: string;
  textRegist: string;
  textLogin: string;
  textGoogle: string;
  textPasswordLost: React.ReactElement;
  googleSingin?: boolean;
  submitActions: Function;
}

interface State { }

class LoginForm extends React.Component<Props, State> {
  render() {
    const { 
      className,
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
      
      textUser,
      textPassword,
      textRegist, 
      textLogin,
      textGoogle,
      textPasswordLost,

      googleSingin
    } = this.props;
    
    return (
      <Card className={ `login-container ${className}` }>
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
            label={ textUser }
          />

          <Field 
            className="form-control r-login-password"
            name="password"
            type="password"
            component={ RenderTextFieldReactive }
            label={ textPassword }
          />

          {
            isLoading ?
              <>
                <div className="text-center mt-4">
                  <button
                    className={ `mr-3 ${classRegist} r-login-regist` } 
                    type="button" 
                    onClick={ () => cancel() }
                  >
                    <FontAwesomeIcon icon="user-plus"/>
                    <SpaceReactive spaces={ 2 } />
                    { textRegist }
                  </button>

                  <button 
                    className={ `${classLogin} r-login-login` }
                    type="submit" 
                    disabled={ submitting }
                  >
                    <FontAwesomeIcon icon="sign-in-alt"/>
                    <SpaceReactive spaces={ 2 } />
                    { textLogin }
                  </button>
                </div>

                {
                  googleSingin &&
                  <div className="text-center mt-3 mb-3">
                    <button 
                      className={ `${classGoogle} r-login-google` }
                      type="button"
                    > 
                      <GoogleIcon />
                      <SpaceReactive spaces={ 2 } />
                      { textGoogle }
                    </button>
                  </div>
                } 

                <div className="text-center mt-2">
                  { textPasswordLost }
                </div>
              </>
            : 
              <div className="text-center r-login-spinner">
                <FontAwesomeIcon icon="spinner" size="2x" spin />
              </div>
          }
        </form>
      </Card>
    );
  }
}

const validate = (values: any) => {
  const errors = {
    email: '',
    password: ''
  }
  
  if (!values.email) {
    errors.email = 'El nombre de usuario es requerido';
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