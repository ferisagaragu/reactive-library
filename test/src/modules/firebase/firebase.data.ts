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
    }, (errorCode: any, errorMessage: any) => {
      /*
        errorCode -> codigo de error
        errorMessage -> mensaje de error
      */
    }
  );
  
  signInWithEmailAndPassword('example@gmail.com', 'examplePassword',
    (user: any) => {
      /*user -> informacion del usuario*/
    }, (errorCode: any, errorMessage: any) => {
      /*
        errorCode -> codigo de error
        errorMessage -> mensaje de error
      */
    }
  );

  sendPasswordResetEmail('example@gmail.com', 
    () => {
      /*Se ejecuta cuando se manda el corre de recuperación*/
    }, (error: any) => {
      /*
        error -> codigo de error
      */
    }
  );

  signInWithGooglePopup(
    (token: any, user: any) => {
      /*
        token -> token del usuario ingresado
        user -> informacion del usuario
      */
    }, (errorCode: any, errorMessage: any) {
      /*
        errorCode -> codigo de error
        errorMessage -> mensaje de error
      */
    }
  );

  signOut(
    () => {
      /*Esta parte se ejecuta cuando el usuario cerro sesión*/
    }, (error: any) => {
      /*
        error -> codigo de error
      */
    } 
  );

  on('example', (snapshot: any) => {
    /*
      snapshot -> datos de firebase
    */
  });

  once('example', (snapshot: any) => {
    /*
      snapshot -> datos de firebase
    */
  });

  remove('example', (error: any) => {
    /*
      error -> codigo de error
    */
  });

  update('example', { example: 'data' }, 
    () => {
      /*
        se ejecuta al actualizar
      */
    }, (error: any) => {
      /*
        error -> codigo de error
      */
    }
  );

  set('example', { example: 'data' },
    (error: any) => {
      /*
        error -> codigo de error
      */
    }
  );

  push('example', { example: 'data' },
    (error: any) => {
      /*
        error -> codigo de error
      */
    }
  );

  putStorage('example', /*AQUÍ VA UN ARCHIVO*/
    (url: string, snapshot: any) => {
      /*
        url -> url del archivo subido
        snapshot -> datos de firebase
      */
    }
  );
`
);