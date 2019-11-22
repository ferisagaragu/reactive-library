import PropsModel from "../../core/models/props.model";

export const props: Array<PropsModel> = [
  new PropsModel({
    propName: 'menuData',
    type: 'Array<BurgerElement>',
    required: false,
    description: 'Contenido del burger menu'
  }),
  new PropsModel({
    propName: 'left',
    type: 'ReactElement',
    required: false,
    description: 'Este contendra codigo Html que se alineara a la izquierda'
  }),
  new PropsModel({
    propName: 'center',
    type: 'ReactElement',
    required: false,
    description: 'Este contendra codigo Html que se alineara al centro'
  }),
  new PropsModel({
    propName: 'right',
    type: 'ReactElement',
    required: false,
    description: 'Este contendra codigo Html que se alineara a la derecha'
  }),
  new PropsModel({
    propName: 'child',
    type: 'ReactElement',
    required: false,
    description: 'Este debe entrar dentro de la etiqueta Footer'
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
  />`
);