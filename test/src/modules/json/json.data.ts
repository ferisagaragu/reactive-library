import FunctionModel from "../../core/models/function.model";

export const propsFunction: Array<FunctionModel> = [
  new FunctionModel({
    functionName: 'foreachJSON',
    params: 'jsonElement: any, forEach: Function',
    returnStr: 'void',
    description: 'Este es para iterar un objeto json'
  }),
  new FunctionModel({
    functionName: 'oderJSONBy',
    params: 'jsonElement: any, orderElements: Array<string>',
    returnStr: 'any',
    description: 'Este es para dejar ordenado un objeto json'
  }),
  new FunctionModel({
    functionName: 'convertJSONToArray',
    params: 'jsonElement: any',
    returnStr: 'Array<any>',
    description: 'Este es para convertir un objeto json en arreglo'
  }),
  new FunctionModel({
    functionName: 'removeInJSONArray',
    params: 'jsonElement: Array<any>, jsonKey: any, matchRemove: any',
    returnStr: 'Array<any>',
    description: 'Este es para remover de un json array un elemento segun su key y si coincide con la informacion'
  }),
  new FunctionModel({
    functionName: 'replaceInJSONArray',
    params: 'jsonElement: Array<any>, jsonKey: any, matchUpdate: any, replaceElement: any',
    returnStr: 'Array<any>',
    description: 'Este es para remplazar en un json array un elemento segun su key y si coincide con la informacion'
  }),
  new FunctionModel({
    functionName: 'getIndexInJSONArray',
    params: 'jsonElement: Array<any>, jsonKey: any, matchUpdate: any',
    returnStr: 'number',
    description: 'Este es para obtener el index en un json array segun su key y si coincide con la informacion'
  }),
  new FunctionModel({
    functionName: 'isJSON',
    params: 'value: any',
    returnStr: 'boolean',
    description: 'Este es para saber si es un objeto json'
  })
];

export const exampleCode = (
` foreachJSON({key: 1, data:'example'}, (data: any, jsonKey: any, index: number) => {
    /*
      data -> objeto json
      jsonKey -> key del json iterado
      index -> index del json iterado
    */
  });

  oderJSONBy({key: 1, data:'example'}, ['data', 'key']);
  /*
    este regresara {data:'example', key: 1}
  */

  convertJSONToArray({key: 1, data:'example'});
  /*
    este regresara [{key: 1, data:'example'}]
  */

  removeInJSONArray(
    [{key: 1, data:'example'}, {key: 2, data:'example'}], 
    'key', 
    1
  );
  /*
    este regresara [{key: 2, data:'example'}]
  */

  replaceInJSONArray(
    [{key: 1, data:'example'}, {key: 2, data:'example'}],
    'key', 
    1,
    {key: 3, data: 'example replace'}
  );
  /*
    este regresara [{key: 3, data: 'example replace'}, {key: 2, data:'example'}]
  */

  getIndexInJSONArray(
    [{key: 1, data:'example'}, {key: 2, data:'example'}],
    'key',
    2
  );
  /*
    este regresara 1 que el el index del elemento 2
  */

  isJSON({key: 1, data:'example'});
  /*
    esto regresara true y si no fuera un json false
  */
`
);