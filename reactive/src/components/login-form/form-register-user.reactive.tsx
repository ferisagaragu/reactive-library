import * as React from 'react';
import { Field, reduxForm } from '../../exports/redux.export';
import { RenderTextFieldReactive } from '../redux-form/redux-render-text-field.reactive';
import { FileFieldReactive } from '../react-field/file-field.reactive';

interface Props {
  classRegistForm: string;
  classCancelRegist: string;
  textRegistForm: React.ReactElement;
  textCancelRegist: React.ReactElement;
  initialValues: any;
  handleSubmit: any;
  cancel: any;
  submitting: any;
  submitActions: Function;
}

interface State { }

class FormRegisterUser extends React.Component<Props, State> {
  render() {
    const {
      classRegistForm,
      classCancelRegist,
      textRegistForm,
      textCancelRegist,
      handleSubmit, 
      cancel, 
      submitting, 
      submitActions 
    } = this.props;
    
    return (
      <form onSubmit={ handleSubmit(submitActions) }>
        
        <FileFieldReactive 
          className="btn-outline-bug btn"
          onSelectFile={ (file: any) => {
            /*this.setState({ isLoad: true });
            this.firebase.putStorage('/test/readme.md', file, (url: string) => {
              console.log(url);
              this.setState({ isLoad: false });
            });*/

            console.log(file);
          }}
          accept=""
          loadMessage="Subiendo el archivo"
          preview={ true }
          classImage="rounded-circle"
        >
          Sube un archivo
        </FileFieldReactive>
        
        <Field 
          className="form-control"
          name="email"
          component={ RenderTextFieldReactive }
          label="Correo electronico"
          type="file"
        />

        <div className="text-center">
          <button 
            className={ `mr-3 r-login-cancel-regist ${classCancelRegist}` }
            onClick={ cancel }
          >
            { textCancelRegist }
          </button>

          <button
            className={ `r-login-regist-form ${classRegistForm}` }
            type="submit" 
            disabled={ submitting }
          >
            { textRegistForm }
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

  return errors
}

export const FormRegisterUserReactive = reduxForm({
  form: 'formRegisterUser',
  validate
})(FormRegisterUser);