import * as React from 'react';
import { Field, reduxForm, change } from '../../exports/redux.export';
import RenderSingleSelectReactive from '../redux-form/redux-render-single-select.reactive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SpaceReactive } from '../space/space.reactive';
import { RenderTextAreaReactive } from '../redux-form/redux-render-text-area.reactive';
import { Button } from 'react-bootstrap';
import { problemsLevel, problems } from './data/select-data.reactive';

interface Props { 
  initialValues: any;
  handleSubmit: any;
  cancel: any;
  submitting: any;
  submitActions: Function;
  dispatch: Function;
}

interface State {
  isBug: boolean;
}

class FormBug extends React.Component<Props, State> {
  
  constructor(props: Props) {
    super(props);

    this.state = {
      isBug: true
    }
  }
  
  private onChangeBug(value: any): void {
    const { dispatch } = this.props;
    if (value.value === 'bug') {
      this.setState({ isBug: true });
    } else {
      this.setState({ isBug: false });
    }

    dispatch(change('BugForm', 'levelProblem', problemsLevel[0]));
  }

  private onSubmit(values: any) {
    const { submitActions } = this.props;
    
    if (values.problemType.value === 'bug') {
      submitActions(values);
    } else {
      delete values['levelProblem'];
      submitActions(values);
    } 
  }

  render() {
    const { 
      handleSubmit, 
      cancel, 
      submitting
    } = this.props; 
    const { isBug } = this.state;
    
    return (
        <form onSubmit={ handleSubmit((values: any) => this.onSubmit(values) ) }>
 
          <Field 
            name="problemType"
            component={ RenderSingleSelectReactive }
            label="Tipo de problema"
            options={ problems }
            noOptionsMessage="No se encontraron coincidencias"
            isSearchable={ false }
            onChange={ (value: any) => this.onChangeBug(value) }
          />

          {
            isBug &&
              <Field 
                name="levelProblem"
                component={ RenderSingleSelectReactive }
                label="Nivel del problema"
                options={ problemsLevel }
                noOptionsMessage="No se encontraron coincidencias"
                isSearchable={ false }
              />
          }

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
    description: '',
    levelProblem: ''
  }
  
  if (!values.problemType) {
    errors.problemType = 'El tipo de problema es requerido';
  }

  if (values.problemType) {
    if (values.problemType.value === 'bug' && !values.levelProblem) {
      errors.levelProblem = 'El tipo nivel del problema es requerido';
    }
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