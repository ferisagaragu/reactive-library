import FunctionModel from "../../core/models/function.model";

export const propsFunction: Array<FunctionModel> = [
  new FunctionModel({
    functionName: 'toast',
    params: `iconType: "success" | "error" | "warning" | "info" | "question" , title: string, 
    position?: 'top' | 'top-start' | 'top-end' | 'top-left' | 'top-right' |
    'center' | 'center-start' | 'center-end' | 'center-left' | 'center-right' |
    'bottom' | 'bottom-start' | 'bottom-end' | 'bottom-left' | 'bottom-right'`,
    returnStr: 'void',
    description: 'Este es para mostrar un toast'
  }),
  new FunctionModel({
    functionName: 'alert',
    params: `iconType: "success" | "error" | "warning" | "info" | "question", title: string, text: string`,
    returnStr: 'void',
    description: 'Este es para mostrar un alert'
  }),
  new FunctionModel({
    functionName: 'alertQuestion',
    params: `iconType: "success" | "error" | "warning" | "info" | "question", title: string, text: string, onSuccess: Function, onCancel?: Function`,
    returnStr: 'void',
    description: 'Este es para mostrar un alert'
  })

  
];

export const exampleCode = (
` toast(
    'success',
    'Todo bien',
    'top'
  );

  alert(
    'success',
    'Todo bien',
    '!En verdad todo es fantastico!'
  );

  alertQuestion(
    'success',
    'Todo bien',
    '¿En verdad todo es fantastico?',
    () => {
      /*
        Se ejecuta si precionan el boton aceptar
      */
    }, () => {
      /*
        Se ejecuta si precionan el boton cancelar
      */
    }
  );
`
);