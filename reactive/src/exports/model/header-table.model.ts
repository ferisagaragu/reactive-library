export class HeaderTable {
  key: string;
  label: string;
  type: string;
  required: boolean;
  placeholder?: string;

  constructor(data: any | HeaderTable) {
    this.key =  '';
    this.label = '';
    this.type = 'text';
    this.required = false;
    this.placeholder = '';
    Object.assign(this, data);
  }
}