import FunctionModel from "../../core/models/function.model";

export const propsFunction: Array<FunctionModel> = [
  new FunctionModel({
    functionName: 'key',
    params: 'void',
    returnStr: 'uid',
    description: 'Este es para obtener un uid'
  })
];

export const exampleCode = (
` key()
  /*
    este regresara un uid
  */
`
);