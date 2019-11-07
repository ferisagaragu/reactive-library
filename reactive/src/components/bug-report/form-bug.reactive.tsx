import * as React from 'react';
import { Field, reduxForm } from '../../exports/redux.export';
import RenderSingleSelectReactive from '../redux-form/redux-render-single-select.reactive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SpaceReactive } from '../space/space.reactive';
import RenderTextAreaReactive from '../redux-form/redux-render-text-area.reactive';
import { Button } from 'react-bootstrap';

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
            component={ RenderSingleSelectReactive }
            label="Tipo de problema"
            options={ problems }
            noOptionsMessage="No se encontraron coincidencias"
            defaultValue={ [] }
            isSearchable={ false }
          />

          <Field 
            className="form-control"
            name="description"
            component={ RenderTextAreaReactive }
            label="Descripción del problema"
          />

          <div className="text-right mt-4">
            <Button 
              className={ `mr-3` } 
              type="button" 
              onClick={ () => cancel() }
              variant="outline-danger"
            >
              <FontAwesomeIcon icon="times" />
              <SpaceReactive />
              Cancelar
            </Button>

            <Button 
              type="submit" 
              disabled={ submitting }
              variant="outline-success"
            >
              <FontAwesomeIcon icon="check" />
              <SpaceReactive />
              Reportar
            </Button>
          </div>
        </form>
    );
  }
}

const validate = (values: any) => {
  const errors = {
    problemType: '',
    description: ''
  }
  
  if (!values.problemType) {
    errors.problemType = 'El tipo de problema es requerido';
  }

  if (!values.description) {
    errors.description = 'La descripción es requerida';
  }

  return errors
}

export const FormBugReactive = reduxForm({
  form: 'BugForm',
  validate
})(FormBug);