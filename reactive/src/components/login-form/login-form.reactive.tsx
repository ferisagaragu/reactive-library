import * as React from 'react';
import { Field, reduxForm } from '../../exports/redux.export';
import { RenderTextField } from '../../components/redux-field/redux-render-text-field.reactive';
import { Button, Row, Col } from 'react-bootstrap';

interface Props { 
  initialValues: any;
  handleSubmit: any;
  cancel: any;
  submitting: any;
  submitActions: Function;
  showButtons: boolean;
  logo: React.ReactElement;
}

interface State { }

class LoginFormReactive extends React.Component<Props, State> {
  render() {
    const { handleSubmit, cancel, submitting, submitActions, showButtons, logo } = this.props;
    
    return (
      <form onSubmit={ handleSubmit(submitActions) }>
        <Row>
          <Col md={ 12 } className="text-center mb-3">
            { logo }
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
          showButtons &&
            <div className="text-center mt-4">
              <Button 
                className="mr-3 btn-hover color-9"
                onClick={ cancel }
              >
                Registrar
              </Button>

              <Button 
                className="btn-hover color-5"
                type="submit" 
                disabled={ submitting }
              >
                Entrar
              </Button>
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
    errors.email = 'El nombre de usuario es requerido';
  }

  if (!values.password) {
    errors.password = 'La contraseña es requerida';
  }

  return errors
}

export default reduxForm({
  form: 'loginForm',
  validate
})(LoginFormReactive);