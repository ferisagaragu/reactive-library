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