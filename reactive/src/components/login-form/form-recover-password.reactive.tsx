import * as React from 'react';
import { Field, reduxForm } from '../../exports/redux.export';
import { RenderTextFieldReactive } from '../redux-form/redux-render-text-field.reactive';
import { FirebaseReactive } from '../firebase/firebase.reactive';
import { foreachJSONReactive } from '../util/json.reactive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SpaceReactive } from '../space/space.reactive';

let emailData: Array<string> = [];

interface Props {
  classRecover: string;
  classCancelRecover: string;
  initialValues: any;
  handleSubmit: any;
  cancel: any;
  submitting: any;
  submitActions: Function;
}

interface State { }

class FormRecoverPassword extends React.Component<Props, State> {
  
  componentDidMount() {
    new FirebaseReactive().once('userData', (snapshot: any) => {
      foreachJSONReactive(snapshot.val(), (data: any) => {
        emailData.push(data.email);
      });
    });
  }

  render() {
    const { 
      classRecover,
      classCancelRecover,
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
          component={ RenderTextFieldReactive }
          label="Correo electrónico"
          type="email"
        />

        <div className="text-center">
          <button 
            className={ `mr-3 ${classCancelRecover}` }
            type="button"
            onClick={ cancel }
          >
            <FontAwesomeIcon icon="times"/>
            <SpaceReactive/>
            Cancelar
          </button>
          
          <button
            className={ classRecover }
            type="submit" 
            disabled={ submitting }
          >
            <FontAwesomeIcon icon="redo"/>
            <SpaceReactive/>
            Enviar correo de recuperación
          </button>
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

  if (values.email) {
    if (!emailData.includes(values.email)) {
      errors.email = 'El correo electrónico a recuperar no esta registrado';
    }
  }

  return errors
}

export const FormRecoverPasswordReactive = reduxForm({
  form: 'recoverPasswordForm',
  validate
})(FormRecoverPassword);