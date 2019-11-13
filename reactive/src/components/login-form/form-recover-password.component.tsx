import * as React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Field, reduxForm } from '../../exports/redux.export';
import { RenderTextFieldReactive } from '../redux-form/redux-render-text-field.reactive';

interface Props { 
  initialValues: any;
  handleSubmit: any;
  cancel: any;
  submitting: any;
  submitActions: Function;
}

interface State { }

class FormRecoverPassword extends React.Component<Props, State> {
  render() {
    const { handleSubmit, cancel, submitting, submitActions } = this.props;
    
    return (
      <form onSubmit={ handleSubmit(submitActions) }>
        <Field 
          className="form-control"
          name="email"
          component={ RenderTextFieldReactive }
          label="Correo electronico"
          type="email"
        />

        <div className="text-right">
          <Button 
            type="submit" 
            disabled={ submitting }
            variant="info"
          >
            <FontAwesomeIcon icon="undo" />
            &nbsp;
            Recuperar contraseña
          </Button>

          <Button 
            className="ml-3"
            onClick={ cancel }
            variant="danger"
          >
            <FontAwesomeIcon icon="times" />
            &nbsp;
            Cancelar
          </Button>
        </div>
      </form>
    );
  }
}

const validate = (values: any) => {
  const errors = {
    email: ''
  }
  
  if (!values.email) {
    errors.email = 'El correo electrónico es requerido';
  }

  return errors
}

export const FormRecoverPasswordReactive = reduxForm({
  form: 'recoverPasswordForm',
  validate
})(FormRecoverPassword);