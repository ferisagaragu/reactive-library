export function foreachJSONReactive(jsonElement: any, forEach: Function): void {
  let index = 0;
  
  for (var jsonKey in jsonElement) {
    if (jsonElement.hasOwnProperty(jsonKey)) {
      forEach(jsonElement[jsonKey], jsonKey, index);
      index++;
    } 
  }
}

export function oderJSONBy(jsonElement: any, orderElements: Array<string>): any {
  let out = {};

  orderElements.forEach(element => {
    out[element] = jsonElement[element];
  });

  return out;
}