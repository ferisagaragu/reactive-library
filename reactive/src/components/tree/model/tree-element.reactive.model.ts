export default class TreeElement {

  uid: any;
  name: any;
  items?: Array<TreeElement>;

  constructor(data: any | TreeElement) {
    this.uid = '';
    this.name = '';
    this.items = [];

    Object.assign(this, data);
  }
}