import PropsModel from "../../core/models/props.model";

export const props: Array<PropsModel> = [
  new PropsModel({
    propName: 'className',
    type: 'string',
    required: false,
    description: 'Esta es la clase css y se aplica directamente al card del login'
  }),
  new PropsModel({
    propName: 'classSpinner',
    type: 'string',
    required: false,
    description: 'Esta es la clase css para el spinner que se muestra cuando hay alguna carga de datos'
  }),
  new PropsModel({
    propName: 'classIcon',
    type: 'string',
    required: false,
    description: 'Esta es la clase css para el icono que se muetra en la seccion de iniciar sesión'
  }),
  new PropsModel({
    propName: 'classLogin',
    type: 'string',
    required: false,
    description: 'Esta es la clase css para el boton de iniciar sesión'
  }),
  new PropsModel({
    propName: 'classRegist',
    type: 'string',
    required: false,
    description: 'Esta es la clase css para el boton de registrar un nuevo usuario'
  }),
  new PropsModel({
    propName: 'classGoogle',
    type: 'string',
    required: false,
    description: 'Esta es la clase css para el boton de inisio de sesión con Google'
  }),
  new PropsModel({
    propName: 'classRecover',
    type: 'string',
    required: false,
    description: 'Esta es la clase css para el boton de recuperar cuenta de usuario'
  }),
  new PropsModel({
    propName: 'classCancelRecover',
    type: 'string',
    required: false,
    description: 'Esta es la clase css para el boton de cancelar recuperación de cuenta de usuario'
  }),
  new PropsModel({
    propName: 'classImageRegist',
    type: 'string',
    required: false,
    description: 'Esta es la clase css para el boton de subir imagen de usuario'
  })

  /*
    classRegistForm?: string;
    classCancelRegist?: string;
    textLoginMessage: string;
    textRegistMessage: string;
    iconUrl?: string;
    defaultUserRol?: number;
    googleSingin?: boolean;
    showImage?: boolean;
    showNickName?: boolean;
    showPhoneNumber?: boolean;
    useCookies?: boolean;
    onLogin: Function;
    onRegist: Function;
  */
];

export const exampleCode = (
` <LoginForm
    className="YOUR CSS CLASS"
    classIcon="YOUR CSS ICON CLASS"
    classLogin="YOUR CSS LOGIN BUTTON CLASS"
    classRegist="YOUR CSS REGIST BUTTON CLASS"
    classGoogle="YOUR CSS GOOGLE BUTTON CLASS"
    classRecover="YOUR CSS RECOVER BUTTON CLASS"
    classCancelRecover="YOUR CSS CANCEL RECOVER BUTTON CLASS"
    classRegistForm="YOUR CSS REGIST BUTTON FORM CLASS"
    classCancelRegist="YOUR CANCEL REGIST BUTTON CLASS"
    classImageRegist="YOUR CSS IMAGE REGIST CLASS"
    iconUrl="YOUR LINK OR IMAGE PATH"
    textLoginMessage="Bienvenido $(name)"
    textRegistMessage="Usuario registrado con $(email)"
    showImage={ false }
    showNickName={ false }
    showPhoneNumber={ false }
    googleSingin
    useCookies
    defaultUserRol={ 1 }
    onLogin={ (userData: UserData) => {
      //on login event
    }}
    onRegist={ (userRegistData: UserData) => {
      //on regist event
    }}
  />
  
  //Implementación simple 
  <LoginForm
    textLoginMessage="Bienvenido $(name)"
    textRegistMessage="Usuario registrado con $(email)"
    googleSingin
    useCookies
    defaultUserRol={ 1 }
    onLogin={ (userData: UserData) => {
      //on login event
    }}
    onRegist={ (userRegistData: UserData) => {
      //on regist event
    }}
  />`
);