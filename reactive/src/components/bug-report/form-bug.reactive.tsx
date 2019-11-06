import * as React from 'react';
import { Field, reduxForm } from '../../exports/redux.export';
import { RenderTextField } from '../redux-form/redux-render-text-field.reactive';

interface Props { 
  initialValues: any;
  handleSubmit: any;
  cancel: any;
  submitting: any;
  submitActions: Function;
}

interface State { }

class FormBug extends React.Component<Props, State> {
  render() {
    const { 
      handleSubmit, 
      cancel, 
      submitting, 
      submitActions
    } = this.props;
    
    return (
        <form onSubmit={ handleSubmit(submitActions) }>
 
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

          <div className="text-right mt-4">
            <button 
              className={ `mr-3` } 
              type="button" 
              onClick={ () => cancel() }
            >
              Cancelar
            </button>

            <button 
              type="submit" 
              disabled={ submitting }
            >
              Reportar
            </button>
          </div>
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

export const FormBugReactive = reduxForm({
  form: 'BugForm',
  validate
})(FormBug);