import * as React from 'react';
import { Field, reduxForm } from '../../exports/redux.export';
import { RenderTextField } from '../../components/redux-field/redux-render-text-field.reactive';
import { Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props { 
  initialValues: any;
  handleSubmit: any;
  cancel: any;
  submitting: any;
  submitActions: Function;
  showButtons: boolean;
  icon: React.ReactElement;
  classCancel: string;
  textCancel: string;
  classSubmit: string;
  textSubmit: string;
  passwordLost: React.ReactElement;
}

interface State { }

class LoginForm extends React.Component<Props, State> {
  render() {
    const { 
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
      passwordLost
    } = this.props;
    
    return (
      <Card className="login-container">
        <form onSubmit={ handleSubmit(submitActions) }>
          <Row>
            <Col md={ 12 } className="text-center mb-3">
              { icon }
            </Col>
          </Row>

          <Field 
            className="form-control"
            name="email"
            type="email"
            component={ RenderTextField }
            label="Nombre de usuario"
          />

          <Field 
            className="form-control"
            name="password"
            type="password"
            component={ RenderTextField }
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
                    className={ `mr-3 ${classCancel}` } 
                    type="button" 
                    onClick={ () => cancel() }
                  >
                    { textCancel }
                  </button>

                  <button 
                    className={ `${classSubmit}` }
                    type="submit" 
                    disabled={ submitting }
                  >
                    { textSubmit }
                  </button>
                </div>
              </>
            : 
              <div className="text-center">
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