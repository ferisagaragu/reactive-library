export function splitArrayReactive(element: Array<any>, parts: number) {
  let countElementPart: number = 1;
  let elementPart: Array<any> = [];
  const out: Array<any> = [];

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

  return out;
}