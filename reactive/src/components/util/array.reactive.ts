export function splitArrayReactive(element: Array<any>, parts: number): Array<any> {
  let countElementPart: number = 1;
  let elementPart: Array<any> = [];
  const out: Array<any> = [];

  if (element) {
    for (let i: number = 0; i < element.length; i++) {
      elementPart.push(element[i]);
      
      if (countElementPart === parts) {
        out.push(elementPart);
        elementPart = [];
        countElementPart = 1;
      } else {
        countElementPart++;
      }

      if (element.length === (i + 1)) {
        if (elementPart.length !== 0) {
          out.push(elementPart);
        }
      }
    }
  }

  return out;
}

export function removeArrayByMatchReactive(element: Array<any>, match: any): Array<any> {
  let removeIndex = -1;
  
  if (!element) {
    return [];
  }

  element.forEach((elementFor: any, index: number) => {
    if (elementFor === match) {
      removeIndex = index;
    }
  });

  element.splice(removeIndex, 1);
  return element;
}