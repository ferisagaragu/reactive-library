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
          className="btn-outline-bug btn mb-3"
          onSelectFile={ (file: any) => {
            /*this.setState({ isLoad: true });
            this.firebase.putStorage('/test/readme.md', file, (url: string) => {
              console.log(url);
              this.setState({ isLoad: false });
            });*/

            console.log(file);
          }}
          accept="image/x-png,image/gif,image/jpeg"
          loadMessage="Subiendo el archivo"
          preview={ true }
          classImage="rounded-circle"
        >
          Imagen de perfil
        </FileFieldReactive>
        
        <Field 
          className="form-control"
          name="nickName"
          component={ RenderTextFieldReactive }
          label="Nombre de usuario"
          type="text"
        />

        <Field 
          className="form-control"
          name="name"
          component={ RenderTextFieldReactive }
          label="Nombres"
          type="text"
        />

        <Field 
          className="form-control"
          name="lastName"
          component={ RenderTextFieldReactive }
          label="Apellidos"
          type="text"
        />

        <Field 
          className="form-control"
          name="email"
          component={ RenderTextFieldReactive }
          label="Correo electrónico"
          type="email"
        />

        <Field 
          className="form-control"
          name="password"
          component={ RenderTextFieldReactive }
          label="Contraseña"
          type="password"
        />

        <Field 
          className="form-control"
          name="phoneNumber"
          component={ RenderTextFieldReactive }
          label="Número teléfonico"
          type="text"
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
    nickName: '',
    name: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: ''
  }
  
  if (!values.nickName) {
    errors.nickName = 'El nombre de usuario es requerido';
  }

  if (!values.name) {
    errors.name = 'Los nombres son requeridos';
  }

  if (!values.lastName) {
    errors.lastName = 'Los apellidos son requeridos';
  }

  if (!values.email) {
    errors.email = 'El correo electrónico es requerido';
  }

  if (!values.password) {
    errors.password = 'La contraseña es requerida';
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = 'El número teléfonico es requerido';
  }

  return errors;
}

export const FormRegisterUserReactive = reduxForm({
  form: 'formRegisterUser',
  validate
})(FormRegisterUser);