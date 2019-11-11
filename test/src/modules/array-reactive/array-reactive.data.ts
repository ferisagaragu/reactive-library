import FunctionModel from "../../core/models/function.model";

export const propsFunction: Array<FunctionModel> = [
  new FunctionModel({
    functionName: 'splitArray',
    params: 'element: Array<any>, parts: number',
    returnStr: 'Array<any>',
    description: 'Este toma un arreglo y lo divide entre el numero que se indique'
  }),
  new FunctionModel({
    functionName: 'removeArrayByMatch',
    params: 'element: Array<any>, match: any',
    returnStr: 'Array<any>',
    description: 'Este elimina los elementos del arreglo que coincidan en algo con el parametro resibido'
  })
  
];

export const exampleCode = (
` let array = [1,2,3,4,5,6,7,8,9,10];
  
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