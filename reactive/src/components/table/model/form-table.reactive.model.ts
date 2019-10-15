export default class FormTable {

  name: string;
  placeholder: string;
  required: boolean;
  type: string;
  value: string;
  error: boolean;

  constructor(data: any | FormTable) {
    this.name = '';
    this.placeholder = '';
    this.required = false;
    this.type = '';
    this.value = '';
    this.error = false;

    Object.assign(this, data);
  }
}