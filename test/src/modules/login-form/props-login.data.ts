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
  }),
  new PropsModel({
    propName: 'classRegistForm',
    type: 'string',
    required: false,
    description: 'Esta es la clase css para el boton de registrar un nuevo usuario'
  }),
  new PropsModel({
    propName: 'classCancelRegist',
    type: 'string',
    required: false,
    description: 'Esta es la clase css para el boton de cancelar registro de un nuevo usuario'
  }),
  new PropsModel({
    propName: 'textLoginMessage',
    type: 'string',
    required: true,
    description: 'Este es el texto que aparecera cuando el usuario inicie sesión, ' + 
    'este puede contener una variable como $(user) o $(email) ' + 
    'y esta se llenara con la información del usuario'
  }),
  new PropsModel({
    propName: 'textRegistMessage',
    type: 'string',
    required: true,
    description: 'Este es el texto que aparecera cuando se registre un nuevo usuario, ' + 
    'este puede contener una variable como $(user) o $(email) ' + 
    'y esta se llenara con la información del usuario'
  }),
  new PropsModel({
    propName: 'iconUrl',
    type: 'string',
    required: false,
    description: 'Esta es la URL o la dirección de la imagen que se ' +
    'mostrara en lugar del icono de usuario en el card de incio de sesión'
  }),
  new PropsModel({
    propName: 'defaultUserRol',
    type: 'number',
    required: false,
    description: 'Este es el rol que tendra el usuario al ser creado, si no se establece este sera -1 por default'
  }),
  new PropsModel({
    propName: 'googleSingin',
    type: 'boolean',
    required: false,
    description: 'Este indica si se permitira el inicio de sesión con una ventana pop de Google'
  }),
  new PropsModel({
    propName: 'showImage',
    type: 'boolean',
    required: false,
    description: 'Este indica si aparecera la imagen para registrar un nuevo usuario, ' +
    'si no se encuentra por default esta aparecera en el registro'
  }),
  new PropsModel({
    propName: 'showNickName',
    type: 'boolean',
    required: false,
    description: 'Este indica si aparecera el nombre de usuario (nickname) para registrar un nuevo usuario, ' +
    'si no se encuentra por default este aparecera en el registro'
  }),
  new PropsModel({
    propName: 'showPhoneNumber',
    type: 'boolean',
    required: false,
    description: 'Este indica si aparecera el numero telefonico para registrar un nuevo usuario, ' +
    'si no se encuentra por default este aparecera en el registro'
  }),
  new PropsModel({
    propName: 'useCookies',
    type: 'boolean',
    required: false,
    description: 'Este indica si los datos del usuario se guardaran para que se haga un inicio de sesión automatico ' +
    'este debe ser anulado con un cierre de sesión'
  }),
  new PropsModel({
    propName: 'onLogin',
    type: 'Function',
    required: true,
    description: 'Esta se disparara justo cuando el usuario inicie sesión'
  }),
  new PropsModel({
    propName: 'onRegist',
    type: 'Function',
    required: true,
    description: 'Esta se disparara justo cuando un nuevo usuario sea registrado'
  })
];

export const propsLogout: Array<PropsModel> = [
  new PropsModel({
    propName: 'className',
    type: 'string',
    required: false,
    description: 'Esta es la clase css para el boton'
  }),
  new PropsModel({
    propName: 'label',
    type: 'string | ReactElement',
    required: false,
    description: 'Este debe ser un string o un elemento de React'
  }),
  new PropsModel({
    propName: 'onClick',
    type: 'Function',
    required: false,
    description: 'Este debe ser un string o un elemento de React'
  })
];

export const exampleMode = [
  new PropsModel({
    propName: 'uid',
    type: 'string',
    required: true,
    description: 'Este es el id unico del usuario creado por Firebase'
  }),
  new PropsModel({
    propName: 'displayName',
    type: 'string',
    required: true,
    description: 'Este es el nombre de usuario(nickname)'
  }),
  new PropsModel({
    propName: 'name',
    type: 'string',
    required: true,
    description: 'Este es el nombre del usuario'
  }),
  new PropsModel({
    propName: 'lastName',
    type: 'string',
    required: true,
    description: 'Estos son los apellidos del usuario'
  }),
  new PropsModel({
    propName: 'email',
    type: 'string',
    required: true,
    description: 'Este es el correo del usuario'
  }),
  new PropsModel({
    propName: 'phoneNumber',
    type: 'string',
    required: true,
    description: 'Este es el numero telefonico del usuario'
  }),
  new PropsModel({
    propName: 'photoURL',
    type: 'string',
    required: true,
    description: 'Este es el URL que contiene la imagen del usuario'
  }),
  new PropsModel({
    propName: 'role',
    type: 'number',
    required: true,
    description: 'Este es el rol que tiene el usuario'
  }),
  new PropsModel({
    propName: 'from',
    type: `'google' | 'email-password'`,
    required: true,
    description: 'Este indica de donde proviene el registro del usuario'
  }),
  new PropsModel({
    propName: 'active',
    type: 'boolean',
    required: true,
    description: 'Este indica si el usuario esta activo o no'
  })
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
  />
  
  <LogoutButton 
    className="btn btn-outline-info" 
  />`
);