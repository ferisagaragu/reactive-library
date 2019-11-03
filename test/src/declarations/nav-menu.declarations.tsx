import React from 'react';
import { BurgerElement, BurgerSubElement, FontAwesomeIcon, key } from "reactive";
import { ReactComponent as ComponentIncon } from '../styles/svg/html.svg';
import { ReactComponent as FunctionIncon } from '../styles/svg/function.svg';

export const navMenu: Array<BurgerElement> = [
  new BurgerElement({
    uid: key(),
    icon: <FontAwesomeIcon icon="atom" />,
    name: <label>Reactive Components</label>,
    items: [
      new BurgerSubElement({
        uid: key(),
        icon: <ComponentIncon className="menu-icon"/>,
        name: <label>Table</label>,
        link: '/table'
      }),
      new BurgerSubElement({
        uid: key(),
        icon: <ComponentIncon className="menu-icon"/>,
        name: <label>Tree</label>,
        link: '/tree'
      })
    ]
  }),
  new BurgerElement({
    uid: key(),
    icon: <FontAwesomeIcon icon="file-export" />,
    name: <label>Reactive Exports</label>,
    items: [
      new BurgerSubElement({
        uid: key(),
        icon: <FontAwesomeIcon icon="cube" />,
        name: <label>Bootstrap</label>,
        link: '/bootstrap'
      })
    ]
  }),
  new BurgerElement({
    uid: key(),
    icon: <FunctionIncon  className="menu-icon"/>,
    name: <label>Reactive Fuctions</label>,
  }),
  new BurgerElement({
    uid: key(),
    icon: <FontAwesomeIcon icon="flask" />,
    name: <label>Reactive Test</label>,
    link: '/test'
  })
];