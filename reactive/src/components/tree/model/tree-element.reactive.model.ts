export default class TreeElement {

  uid: any;
  name: any;
  items?: Array<TreeElement>;
  expanded?: boolean; 

  constructor(data: any | TreeElement) {
    this.uid = '';
    this.name = '';
    this.items = [];
    this.expanded = false;

    Object.assign(this, data);
  }
}