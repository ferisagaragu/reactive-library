import * as React from 'react';
import { Field, reduxForm } from '../../exports/redux.export';
import { RenderTextFieldReactive } from '../redux-form/redux-render-text-field.reactive';
import renderSingleSelectReactive from '../redux-form/redux-render-single-select.reactive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SpaceReactive } from '../space/space.reactive';

interface Props { 
  initialValues: any;
  handleSubmit: any;
  cancel: any;
  submitting: any;
  submitActions: Function;
}

interface State {}

const problems: any = [
  { 
    value: 'bug', 
    label: 
      <label className="text-danger mt-2" >
        <FontAwesomeIcon icon="bug" /> 
        <SpaceReactive />
        Error 
      </label> 
  },{ 
    value: 'improvement', 
    label: 
      <label className="text-info mt-2" >
        <FontAwesomeIcon icon="clipboard-list" /> 
        <SpaceReactive />
        Mejora
      </label> 
  },{ 
    value: 'petition', 
    label: 
      <label className="text-success mt-2" >
        <FontAwesomeIcon icon="magic" /> 
        <SpaceReactive />
        Petición
      </label> 
  }
];

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
              name="problemType"
              component={ renderSingleSelectReactive }
              label="Tipo de problema"
              options={ problems }
              noOptionsMessage="No se encontraron coincidencias"
              defaultValue={ [] }
            />

          <Field 
            className="form-control"
            name="password"
            type="password"
            component={ RenderTextFieldReactive }
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
    problemType: '',
    password: ''
  }
  
  if (!values.problemType) {
    errors.problemType = 'El tipo de problema es requerido';
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