import FunctionModel from "../../core/models/function.model";

export const propsFunction: Array<FunctionModel> = [
  new FunctionModel({
    functionName: 'foreachJSONReactive',
    params: 'jsonElement: any, forEach: Function',
    returnStr: 'void',
    description: 'Este es para iterar un objeto json'
  }),
  
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
`
);