export class SelectElement {
  value: any;
  label: any;

  constructor(data: any | SelectElement) {
    this.value = null;
    this.label = null;

    Object.assign(this, data);
  }
}