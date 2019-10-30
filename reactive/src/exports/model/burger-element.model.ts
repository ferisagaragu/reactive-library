export class BurgerElement {
  uid: string;
  label: any;
  icon: any;
  items?: Array<BurgerElement>;

  constructor(data: any | BurgerElement) {
    this.uid = '';
    this.label = null;
    this.icon = null;
    this.items = [];

    Object.assign(this, data);
  }
}