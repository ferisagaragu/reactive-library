export function toBase64Reactive(img: any, onConvert: Function): any {
  if (typeof img == 'object') {
    let file: any = img;
    let reader: any = new FileReader();

    reader.readAsDataURL(file);
    reader.onloadend = function () {
      var b64 = reader.result.replace(/^data:.+;base64,/, '');
      onConvert(b64);
    };
  } else {
    onConvert(img);
  }
}