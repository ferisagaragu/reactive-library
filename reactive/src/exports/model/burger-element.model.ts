import { BurgerSubElement } from "./burger-sub-element.model";

export class BurgerElement {
  uid: any;
  name: any;
  icon: any;
  items: Array<BurgerSubElement>;
  link?: string;

  constructor(data: any | BurgerElement) {
    this.uid = '';
    this.name = '';
    this.icon = null;
    this.items = [];

    Object.assign(this, data);
  }
}