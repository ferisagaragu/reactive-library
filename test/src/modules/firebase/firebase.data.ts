import FunctionModel from "../../core/models/function.model";

export const propsFunction: Array<FunctionModel> = [
  new FunctionModel({
    functionName: 'createUserWithEmailAndPassword',
    params: 'email: string, password: string, onRegist: Function, onError?: Function | undefined',
    returnStr: 'void',
    description: 'Este es para crear un usuario basado en un email y una contraseña'
  }),
  new FunctionModel({
    functionName: 'signInWithEmailAndPassword',
    params: 'email: string, password: string, onLogIn: Function, onError?: Function | undefined',
    returnStr: 'void',
    description: 'Este es para iniciar sesión con un email y contraseña previamente registrado'
  }),
  new FunctionModel({
    functionName: 'sendPasswordResetEmail',
    params: 'email: string, onSendMail: Function, onError?: Function',
    returnStr: 'void',
    description: 'Este es para enviar un correo electronico para recuperar la contraseña del usuario'
  }),
  new FunctionModel({
    functionName: 'signInWithGooglePopup',
    params: 'onSignIn: Function, onError?: Function | undefined',
    returnStr: 'void',
    description: 'Este es para iniciar sesión por medio de Google'
  }),
  new FunctionModel({
    functionName: 'signInWithGooglePopup',
    params: 'onSignIn: Function, onError?: Function | undefined',
    returnStr: 'void',
    description: 'Este es para iniciar sesión por medio de Google'
  }),
  new FunctionModel({
    functionName: 'signOut',
    params: 'onSignOut: Function, onError?: Function | undefined',
    returnStr: 'void',
    description: 'Este es para cerrar sesión'
  }),
  new FunctionModel({
    functionName: 'on',
    params: 'path: string, onFunction: Function',
    returnStr: 'void',
    description: 'Este es para obtener datos de firebase pero deja un hilo activo que los actualiza cada que se modifican'
  }),
  new FunctionModel({
    functionName: 'once',
    params: 'path: string, onFunction: Function',
    returnStr: 'void',
    description: 'Este es para obtener datos de firebase'
  }),
  new FunctionModel({
    functionName: 'remove',
    params: 'path: string, onFunction: Function',
    returnStr: 'void',
    description: 'Este es para remover datos de firebase'
  }),
  new FunctionModel({
    functionName: 'update',
    params: 'path: string, onFunction: Function',
    returnStr: 'void',
    description: 'Este es para actualizar datos de firebase'
  }),
  new FunctionModel({
    functionName: 'set',
    params: 'path: string, onFunction: Function',
    returnStr: 'void',
    description: 'Este es para sustituir datos de firebase'
  }),
  new FunctionModel({
    functionName: 'push',
    params: 'path: string, onFunction: Function',
    returnStr: 'void',
    description: 'Este es para crear datos de firebase'
  }),
  new FunctionModel({
    functionName: 'putStorage',
    params: 'path: string, onFunction: Function',
    returnStr: 'void',
    description: 'Este es para subir archivos al storage de firebase'
  })
];

export const exampleCode = (
` createUserWithEmailAndPassword('example@gmail.com', 'examplePassword', 
    (user: any) => {
      /*user -> informacion del usuario*/
    },
    (errorCode: any, errorMessage: any) => {
      /*
        errorCode -> codigo de error
        errorMessage -> mensaje de error
      */
    }
  );
  
  splitArray(array, 2);
  /* 
    [
      [1,2],
      [3,4],
      [5,6],
      [7,8],
      [9,10]
    ]
  */

  removeArrayByMatch(array, 2);
  /* 
    [1,3,4,5,6,7,8,9,10]
 */
`
);