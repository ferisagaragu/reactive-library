import * as React from 'react';
import { Field, reduxForm } from '../../exports/redux.export';
import { RenderTextFieldReactive } from '../redux-form/redux-render-text-field.reactive';
import { FileFieldReactive } from '../react-field/file-field.reactive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RenderMaskFieldReactive } from '../redux-form/redux-render-mask-field.reactive';

interface Props {
  classRegistForm: string;
  classCancelRegist: string;
  textRegistForm: React.ReactElement;
  textCancelRegist: React.ReactElement;
  initialValues: any;
  handleSubmit: any;
  cancel: any;
  submitting: any;
  isLoading: boolean;
  submitActions: Function;
}

interface State { 
  fileLoad: any;
  submit: boolean;
}

class FormRegisterUser extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      fileLoad: null,
      submit: false
    }
  }

  private submitActions(formValues: any): void {
    const { submitActions } = this.props;
    const { fileLoad } = this.state;

    if (fileLoad) {
      formValues.photoURL = fileLoad; 
      submitActions(formValues);
    }
  }
  
  render() {
    const {
      classRegistForm,
      classCancelRegist,
      textRegistForm,
      textCancelRegist,
      handleSubmit, 
      cancel, 
      submitting,
      isLoading
    } = this.props;
    const { fileLoad, submit } = this.state;
    
    return (
      <form onSubmit={ handleSubmit((formValues: any) => this.submitActions(formValues)) }>
        
        <FileFieldReactive 
          className={ `btn-outline-dark btn mb-3 ${(!fileLoad && submit) && 'error'}` }
          onSelectFile={ (file: any) => this.setState({ fileLoad: file }) }
          accept="image/x-png,image/gif,image/jpeg"
          loadMessage="Subiendo el archivo"
          preview={ true }
          classImage="rounded-circle"
          disabled={ isLoading }
        >
          Imagen de perfil
        </FileFieldReactive>
        {
          (!fileLoad && submit) && 
            <div className="text-danger text-center mb-3">
              La imagen de perfil es requerida
            </div>
        }
      
        <Field 
          className="form-control"
          name="nickName"
          component={ RenderTextFieldReactive }
          label="Nombre de usuario"
          type="text"
          disabled={ isLoading }
        />

        <Field 
          className="form-control"
          name="name"
          component={ RenderTextFieldReactive }
          label="Nombres"
          type="text"
          disabled={ isLoading }
        />

        <Field 
          className="form-control"
          name="lastName"
          component={ RenderTextFieldReactive }
          label="Apellidos"
          type="text"
          disabled={ isLoading }
        />

        <Field 
          className="form-control"
          name="email"
          component={ RenderTextFieldReactive }
          label="Correo electrónico"
          type="email"
          disabled={ isLoading }
        />

        <Field 
          className="form-control"
          name="password"
          component={ RenderTextFieldReactive }
          label="Contraseña"
          type="password"
          disabled={ isLoading }
        />

        <Field 
          className="form-control"
          name="phoneNumber"
          component={ RenderMaskFieldReactive }
          label="Número teléfonico"
          type="text"
          disabled={ isLoading }
          mask="+52 (99) 99-99-99-99"
        />

        {
          !isLoading ?
            <div className="text-center mt-3">
              <button 
                className={ `mr-3 r-login-cancel-regist ${classCancelRegist}` }
                type="button"
                onClick={ cancel }
              >
                { textCancelRegist }
              </button>

              <button
                className={ `r-login-regist-form ${classRegistForm}` }
                type="submit" 
                disabled={ submitting }
                onClick={ () => this.setState({ submit: true }) }
              >
                { textRegistForm }
              </button>
            </div>
          :
            <div className="text-center r-login-spinner">
              <FontAwesomeIcon icon="spinner" size="2x" spin />
            </div>
        } 
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

  if (values.password) {
    const result = values.password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);
    if (!result) {
      errors.password = 'La contraseña no es valida, esta debe contener 2 números y 8 dígitos';
    }
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = 'El número telefónico es requerido';
  }

  if (values.phoneNumber) {
    if (values.phoneNumber.includes('_')) {
      errors.phoneNumber = 'El número telefónico no está completo, este debe contener 10 dígitos';
    }
  }

  return errors;
}

export const FormRegisterUserReactive = reduxForm({
  form: 'formRegisterUser',
  validate
})(FormRegisterUser);