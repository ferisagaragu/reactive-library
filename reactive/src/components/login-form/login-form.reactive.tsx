import * as React from 'react';
import { Field, reduxForm } from '../../exports/redux.export';
import { RenderTextFieldReactive } from '../redux-form/redux-render-text-field.reactive';
import { Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props { 
  className: string;
  classCancel: string;
  classSubmit: string;
  initialValues: any;
  handleSubmit: any;
  cancel: any;
  submitting: any;
  showButtons: boolean;
  icon: React.ReactElement;
  textCancel: string;
  textSubmit: string;
  passwordLost: React.ReactElement;
  submitActions: Function;
}

interface State { }

class LoginForm extends React.Component<Props, State> {
  render() {
    const { 
      className,
      handleSubmit, 
      cancel, 
      submitting, 
      submitActions, 
      showButtons, 
      icon, 
      classCancel, 
      textCancel, 
      classSubmit, 
      textSubmit,
      passwordLost,
      children
    } = this.props;
    
    return (
      <Card className={ `login-container ${className}` }>
        <form onSubmit={ handleSubmit(submitActions) }>
          <Row>
            <Col md={ 12 } className="text-center mb-3">
              { icon }
            </Col>
          </Row>

          <Field
            className="form-control r-login-user-name"
            name="email"
            type="email"
            component={ RenderTextFieldReactive }
            label="Nombre de usuario"
          />

          <Field 
            className="form-control r-login-password"
            name="password"
            type="password"
            component={ RenderTextFieldReactive }
            label="Contraseña"
          />

          {
            showButtons ?
              <>
                {
                  passwordLost &&
                    <div className="text-center mt-2">
                      { passwordLost }
                    </div>
                }
                
                <div className="text-center mt-4">
                  <button
                    className={ `mr-3 ${classCancel} r-login-cancel` } 
                    type="button" 
                    onClick={ () => cancel() }
                  >
                    { textCancel }
                  </button>

                  <button 
                    className={ `${classSubmit} r-login-submit` }
                    type="submit" 
                    disabled={ submitting }
                  >
                    { textSubmit }
                  </button>
                </div>
              </>
            : 
              <div className="text-center r-login-spinner">
                <FontAwesomeIcon icon="spinner" size="2x" spin />
              </div>
          }
        </form>
        { children }
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