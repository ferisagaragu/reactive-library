export function foreachJSONReactive(jsonElement: any, forEach: Function): void {
  let index: number = 0;
  
  for (let jsonKey in jsonElement) {
    jsonElement.hasOwnProperty(jsonKey) &&
      forEach(jsonElement[jsonKey], jsonKey, index);
      index++;
  }
}

export function oderJSONByReactive(jsonElement: any, orderElements: Array<string>): any {
  let out: any = {};

  if (!jsonElement || !orderElements) {
    return {};
  }

  orderElements.forEach(element => {
    out[element] = jsonElement[element];
  });

  return out;
}

export function convertJSONToArrayReactive(jsonElement: any): Array<any> {
  const out: Array<any> = [];
  
  for (let jsonKey in jsonElement) {
    jsonElement.hasOwnProperty(jsonKey) &&
      out.push(jsonElement[jsonKey]);
  }

  return out;
}

export function removeInJSONArrayReactive(jsonElement: Array<any>, jsonKey: any, matchRemove: any): Array<any> {
  let removeIndex = -1;
  
  if (!jsonElement) {
    return [];
  }

  if (!jsonKey || !matchRemove) {
    return jsonElement;
  }

  jsonElement.forEach((element: any, index: number) => {
    if (element[jsonKey] === matchRemove) {
      removeIndex = index;
    }
  });

  jsonElement.splice(removeIndex, 1);
  return jsonElement;
}

export function replaceInJSONArrayReactive(
  jsonElement: Array<any>, 
  jsonKey: any, 
  matchUpdate: any, 
  replaceElement: any
): Array<any> {
  let replaceIndex = -1;
  
  if (!jsonElement) {
    return [];
  }

  jsonElement.forEach((element: any, index: number) => {
    if (element[jsonKey] === matchUpdate) {
      replaceIndex = index;
    }
  });

  jsonElement[replaceIndex] = replaceElement;
  return jsonElement;
}

export function getIndexInJSONArrayReactive(
  jsonElement: Array<any>, 
  jsonKey: any, 
  matchUpdate: any,
): number {
  let replaceIndex = -1;
  
  if (!jsonElement) {
    return -1;
  }

  jsonElement.forEach((element: any, index: number) => {
    if (element[jsonKey] === matchUpdate) {
      replaceIndex = index;
    }
  });

  return replaceIndex;
}

export function isJSONReactive(value: any): boolean {
  const json = JSON.stringify(value);
  if (!(json.charAt(0) === '{') && !(json.charAt(json.length) === '}')) {
    return false;
  }

  return true;
}