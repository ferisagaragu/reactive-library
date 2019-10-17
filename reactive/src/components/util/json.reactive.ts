export function foreachJSON(jsonElement: any, forEach: Function): void {
  let index = 0;
  
  for (var jsonKey in jsonElement) {
    if (jsonElement.hasOwnProperty(jsonKey)) {
      forEach(jsonElement[jsonKey], jsonKey, index);
      index++;
    } 
  }
}