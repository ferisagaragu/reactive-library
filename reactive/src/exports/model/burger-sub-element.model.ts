export class BurgerSubElement {
  uid: any;
  name: any;
  icon: any;
  link: string;

  constructor(data: any | BurgerSubElement) {
    this.uid = '';
    this.name = '';
    this.icon = null;
    this.link = '';

    Object.assign(this, data);
  }
}