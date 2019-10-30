export class TreeElement {
  uid: any;
  name: any;
  items?: Array<TreeElement>;
  expanded?: boolean; 
  disabled?: boolean;

  constructor(data: any | TreeElement) {
    this.uid = '';
    this.name = '';
    this.items = [];
    this.expanded = false;
    this.disabled = false;

    Object.assign(this, data);
  }
}