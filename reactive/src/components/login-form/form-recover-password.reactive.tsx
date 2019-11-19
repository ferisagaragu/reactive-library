import * as React from 'react';
import { Field, reduxForm } from '../../exports/redux.export';
import { RenderTextFieldReactive } from '../redux-form/redux-render-text-field.reactive';
import { FirebaseReactive } from '../firebase/firebase.reactive';
import { foreachJSONReactive } from '../util/json.reactive';

let emailData: Array<string> = [];

interface Props {
  classRecover: string;
  classCancelRecover: string;
  textCancelRecover: React.ReactElement;
  textRecover: React.ReactElement;
  textEmailRecover: React.ReactElement;
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
      textCancelRecover,
      textRecover,
      handleSubmit, 
      cancel, 
      submitting, 
      submitActions,
      textEmailRecover
    } = this.props;
    
    return (
      <form onSubmit={ handleSubmit(submitActions) }>
        <Field 
          className="form-control"
          name="email"
          component={ RenderTextFieldReactive }
          label={ textEmailRecover }
          type="email"
        />

        <div className="text-center">
          <button 
            className={ `mr-3 ${classCancelRecover} r-login-cancel-recover` }
            type="button"
            onClick={ cancel }
          >
            { textCancelRecover }
          </button>
          
          <button
            className={ `r-login-recover ${classRecover}` }
            type="submit" 
            disabled={ submitting }
          >
            { textRecover }
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