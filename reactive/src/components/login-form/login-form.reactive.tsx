import * as React from 'react';
import { Field, reduxForm } from '../../exports/redux.export';
import { RenderTextFieldReactive } from '../redux-form/redux-render-text-field.reactive';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GoogleIcon } from './res/google.icon';
import { SpaceReactive } from '../space/space.reactive';

interface Props { 
  classSpinner: string;
  classLogin: string;
  classRegist: string;
  classGoogle: string;
  classIcon: string;
  handleSubmit: any;
  cancel: any;
  submitting: any;
  isLoading: boolean;
  iconUrl: string;
  googleSingin?: boolean;
  regist: boolean;
  recover: boolean;
  onGoogle: Function;
  submitActions: Function;
  recoverPassword: Function;
}

interface State { }

class LoginForm extends React.Component<Props, State> {
  render() {
    const { 
      classSpinner,
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

      googleSingin,
      onGoogle,

      recoverPassword,
      regist,
      recover
    } = this.props;
    
    return (
      <form onSubmit={ handleSubmit(submitActions) }>
        <Row>
          <Col md={ 12 } className="text-center mb-3">
            {
              iconUrl ?
                <img className={ `${classIcon}` } alt="login logo" src={ iconUrl } />
              :
                <FontAwesomeIcon className="mb-5" icon="user" size="8x" /> 
            }
          </Col>
        </Row>

        <Field
          className="form-control"
          name="email"
          type="email"
          component={ RenderTextFieldReactive }
          label="Correo electrónico"
          disabled={ isLoading }
        />

        <Field 
          className="form-control"
          name="password"
          type="password"
          component={ RenderTextFieldReactive }
          label="Contraseña"
          disabled={ isLoading }
        />

        {
          !isLoading ?
            <>
              <div className="text-center mt-4">
                {
                  (regist === undefined  || regist) &&
                    <button
                      className={ `mr-3 ${classRegist}` } 
                      type="button" 
                      onClick={ () => cancel() }
                    >
                      <FontAwesomeIcon icon="user-plus"/>
                      <SpaceReactive/>
                      Registrar un nuevo usuario
                    </button>
                }

                <button 
                  className={ `${classLogin}` }
                  type="submit" 
                  disabled={ submitting }
                >
                  <FontAwesomeIcon icon="user-check"/>
                  <SpaceReactive/>
                  Iniciar sesión
                </button>
              </div>

              {
                googleSingin &&
                <div className="text-center mt-3 mb-3">
                  <button 
                    className={ `${classGoogle}` }
                    type="button"
                    onClick={ () => onGoogle() }
                  > 
                    <GoogleIcon />
                    <SpaceReactive spaces={ 2 } />
                    Iniciar sesión con Google
                  </button>
                </div>
              } 

              {
                (recover === undefined  || recover) &&
                  <div className="text-center mt-2">
                    <button className="login-recover-password" type="button" onClick={ () => recoverPassword() }>
                      ¿No recuerdas tu contraseña?
                    </button>
                  </div>
              }
            </>
          : 
            <div className="text-center">
              <FontAwesomeIcon className={ classSpinner } icon="spinner" size="2x" spin />
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