import * as React from 'react';
import { Field, reduxForm } from '../../exports/redux.export';
import { RenderTextFieldReactive } from '../redux-form/redux-render-text-field.reactive';
import { FileFieldReactive } from '../react-field/file-field.reactive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RenderMaskFieldReactive } from '../redux-form/redux-render-mask-field.reactive';
import { FirebaseReactive } from '../firebase/firebase.reactive';
import { foreachJSONReactive } from '../util/json.reactive';
import { UserIcon } from './res/user.icon';
import { SpaceReactive } from '../space/space.reactive';

let nickNameData: Array<string> = [];
let phoneNumberData: Array<string> = [];
let emailData: Array<string> = [];

interface Props {
  classSpinner: string;
  classRegistForm: string;
  classCancelRegist: string;
  classImageRegist: string;
  initialValues: any;
  handleSubmit: any;
  cancel: any;
  submitting: any;
  isLoading: boolean;
  showImage?: boolean;
  showNickName?: boolean;
  showPhoneNumber?: boolean;
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

  componentDidMount() {
    new FirebaseReactive().once('userData', (snapshot: any) => {
      foreachJSONReactive(snapshot.val(), (data: any) => {
        nickNameData.push(data.displayName);
        phoneNumberData.push(data.phoneNumber);
        emailData.push(data.email);
      });
    });
  }

  private submitActions(formValues: any): void {
    const { submitActions, showImage } = this.props;
    const { fileLoad } = this.state;

    if (fileLoad && showImage && (Math.trunc((fileLoad.size ? fileLoad.size : 0) / 1024) < 3000)) {
      formValues.photoURL = fileLoad; 
      submitActions(formValues);
    }

    if (!showImage) {
      submitActions(formValues);
    }
  }
  
  render() {
    const {
      classSpinner,
      classRegistForm,
      classCancelRegist,
      classImageRegist,
      handleSubmit, 
      cancel, 
      submitting,
      isLoading,
      showImage,
      showNickName,
      showPhoneNumber
    } = this.props;
    const { fileLoad, submit } = this.state;
    
    return (
      <form onSubmit={ handleSubmit((formValues: any) => this.submitActions(formValues)) }>
        
        {
          showImage &&
            <>
              <FileFieldReactive 
                className={ 
                  `mb-3 
                  ${classImageRegist} 
                  ${(!fileLoad && submit) && 'error'} 
                  ${(fileLoad && !(Math.trunc((fileLoad.size ? fileLoad.size : 0) / 1024) < 3000)) && 'error'}
                  ` 
                }
                onSelectFile={ (file: any) => this.setState({ fileLoad: file }) }
                accept="image/x-png,image/gif,image/jpeg"
                loadMessage="Subiendo el archivo"
                preview={ true }
                classImage="rounded-circle"
                defaultImg={ <UserIcon /> }
                disabled={ isLoading }
              >
                Imagen de perfil
              </FileFieldReactive>
              <>
                {
                  (!fileLoad && submit) && 
                    <div className="text-danger text-center mb-3">
                      La imagen de perfil es requerida
                    </div>
                }
                {
                  (fileLoad && !(Math.trunc((fileLoad.size ? fileLoad.size : 0) / 1024) < 3000)) &&
                    <div className="text-danger text-center mb-3">
                      El tamaño de la imagen de perfil no puede superar los 3MB
                    </div>

                }
              </>
            </>
        }

        {
          showNickName &&
            <Field 
              className="form-control"
              name="nickName"
              component={ RenderTextFieldReactive }
              label="Nombre de usuario"
              type="text"
              disabled={ isLoading }
            />
        }

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

        {
          showPhoneNumber &&
            <Field
              className="form-control"
              name="phoneNumber"
              component={ RenderMaskFieldReactive }
              label="Número teléfonico"
              type="text"
              disabled={ isLoading }
              mask="+52 (99) 99-99-99-99"
            />
        }

        {
          !isLoading ?
            <div className="text-center mt-3">
              <button 
                className={ `mr-3 ${classCancelRegist}` }
                type="button"
                onClick={ cancel }
              >
                <FontAwesomeIcon icon="times"/>
                <SpaceReactive/>
                Cancelar
              </button>

              <button
                className={ classRegistForm }
                type="submit" 
                disabled={ submitting }
                onClick={ () => this.setState({ submit: true }) }
              >
                <FontAwesomeIcon icon="user-plus"/>
                <SpaceReactive/>
                Registrar usuario
              </button>
            </div>
          :
            <div className="text-center">
              <FontAwesomeIcon className={ classSpinner } icon="spinner" size="2x" spin />
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

  if (values.nickName) {
    if (nickNameData.includes(values.nickName)) {
      errors.nickName = 'El nombre de usuario ya ha sido registrado';
    }

    if (values.nickName.includes(' ')) {
      errors.nickName = 'El nombre de usuario no puede contener espacios';
    }
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

  if (values.email) {
    if (emailData.includes(values.email)) {
      errors.email = 'El correo electrónico ya ha sido registrado';
    }
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
    if (phoneNumberData.includes(values.phoneNumber)) {
      errors.phoneNumber = 'El número telefónico ya ha sido registrado';
    }

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