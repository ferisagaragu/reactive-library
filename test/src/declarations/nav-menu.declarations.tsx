import React from 'react';
import { BurgerElement, BurgerSubElement, FontAwesomeIcon, key } from "reactive";
import { ReactComponent as ComponentIncon } from '../styles/svg/html.svg';
import { ReactComponent as FunctionIncon } from '../styles/svg/function.svg';
import { ReactComponent as ReduxIcon } from '../styles/svg/redux.svg';
import { ReactComponent as CssIcon } from '../styles/svg/css3.svg';

export const navMenu: Array<BurgerElement> = [
  new BurgerElement({
    uid: key(),
    icon: <FontAwesomeIcon icon="atom" />,
    name: <label>Reactive Components</label>,
    items: [
      new BurgerSubElement({
        uid: key(),
        icon: <ComponentIncon className="menu-icon"/>,
        name: <label>Bug Report</label>,
        link: '/bug-report'
      }),
      new BurgerSubElement({
        uid: key(),
        icon: <ComponentIncon className="menu-icon"/>,
        name: <label>Check Box</label>,
        link: '/check-box'
      }),
      new BurgerSubElement({
        uid: key(),
        icon: <ComponentIncon className="menu-icon"/>,
        name: <label>File Field</label>,
        link: '/file-field'
      }),
      new BurgerSubElement({
        uid: key(),
        icon: <ComponentIncon className="menu-icon"/>,
        name: <label>Footer</label>,
        link: '/footer'
      }),
      new BurgerSubElement({
        uid: key(),
        icon: <ComponentIncon className="menu-icon"/>,
        name: <label>Gradient Button</label>,
        link: '/gradient-button'
      }),
      new BurgerSubElement({
        uid: key(),
        icon: <ComponentIncon className="menu-icon"/>,
        name: <label>Header</label>,
        link: '/header'
      }),
      new BurgerSubElement({
        uid: key(),
        icon: <ComponentIncon className="menu-icon"/>,
        name: <label>Login Form</label>,
        link: '/login-form'
      }),
      new BurgerSubElement({
        uid: key(),
        icon: <ComponentIncon className="menu-icon"/>,
        name: <label>Modal</label>,
        link: '/modal'
      }),
      new BurgerSubElement({
        uid: key(),
        icon: <ComponentIncon className="menu-icon"/>,
        name: <label>Multi Select</label>,
        link: '/multi-select'
      }),
      new BurgerSubElement({
        uid: key(),
        icon: <ComponentIncon className="menu-icon"/>,
        name: <label>Select</label>,
        link: '/react-select'
      }),
      new BurgerSubElement({
        uid: key(),
        icon: <ComponentIncon className="menu-icon"/>,
        name: <label>Single Modal</label>,
        link: '/single-modal'
      }),
      new BurgerSubElement({
        uid: key(),
        icon: <ComponentIncon className="menu-icon"/>,
        name: <label>Single Select</label>,
        link: '/single-select'
      }),
      new BurgerSubElement({
        uid: key(),
        icon: <ComponentIncon className="menu-icon"/>,
        name: <label>Space</label>,
        link: '/space'
      }),
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
    icon: <CssIcon className="menu-icon"/>,
    name: <label>Reactive CSS</label>,
    link: '/r-css'
  }),
  new BurgerElement({
    uid: key(),
    icon: <ReduxIcon className="menu-icon"/>,
    name: <label>Redux From Renders</label>,
    items: [
      new BurgerSubElement({
        uid: key(),
        icon: <ComponentIncon className="menu-icon"/>,
        name: <label>Render Single Select</label>,
        link: '/render-single-select'
      }),
      new BurgerSubElement({
        uid: key(),
        icon: <ComponentIncon className="menu-icon"/>,
        name: <label>Render Text Area</label>,
        link: '/render-text-area'
      }),
      new BurgerSubElement({
        uid: key(),
        icon: <ComponentIncon className="menu-icon"/>,
        name: <label>Render Text Field</label>,
        link: '/render-text-field'
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
      }),
      new BurgerSubElement({
        uid: key(),
        icon: <FontAwesomeIcon icon="cube" />,
        name: <label>Burger Menu</label>,
        link: '/burger-menu'
      }),
      new BurgerSubElement({
        uid: key(),
        icon: <FontAwesomeIcon icon="cube" />,
        name: <label>Cookies JS</label>,
        link: '/cookies-js'
      }),
      new BurgerSubElement({
        uid: key(),
        icon: <FontAwesomeIcon icon="cube" />,
        name: <label>Date Picker</label>,
        link: '/date-picker'
      }),
      new BurgerSubElement({
        uid: key(),
        icon: <FontAwesomeIcon icon="cube" />,
        name: <label>Font Awesome</label>,
        link: '/font-awesome'
      }),
      new BurgerSubElement({
        uid: key(),
        icon: <FontAwesomeIcon icon="cube" />,
        name: <label>Moment</label>,
        link: '/moment'
      }),
      new BurgerSubElement({
        uid: key(),
        icon: <FontAwesomeIcon icon="cube" />,
        name: <label>Iframe</label>,
        link: '/iframe'
      }),
      new BurgerSubElement({
        uid: key(),
        icon: <FontAwesomeIcon icon="cube" />,
        name: <label>React Router</label>,
        link: '/react-router'
      }),
      new BurgerSubElement({
        uid: key(),
        icon: <FontAwesomeIcon icon="cube" />,
        name: <label>Redux</label>,
        link: '/redux'
      }),
      new BurgerSubElement({
        uid: key(),
        icon: <FontAwesomeIcon icon="cube" />,
        name: <label>Syntax Highlighter</label>,
        link: '/syntax-highlighter'
      })
    ]
  }),
  new BurgerElement({
    uid: key(),
    icon: <FunctionIncon  className="menu-icon"/>,
    name: <label>Reactive Fuctions</label>,
    items:[
      new BurgerSubElement({
        uid: key(),
        icon: <FontAwesomeIcon icon="cogs" />,
        name: <label>Array</label>,
        link: '/array'
      }),
      new BurgerSubElement({
        uid: key(),
        icon: <FontAwesomeIcon icon="cogs" />,
        name: <label>Firebase</label>,
        link: '/firebase'
      }),
      new BurgerSubElement({
        uid: key(),
        icon: <FontAwesomeIcon icon="cogs" />,
        name: <label>JSON</label>,
        link: '/json'
      }),
      new BurgerSubElement({
        uid: key(),
        icon: <FontAwesomeIcon icon="cogs" />,
        name: <label>Key</label>,
        link: '/key'
      }),
      new BurgerSubElement({
        uid: key(),
        icon: <FontAwesomeIcon icon="cogs" />,
        name: <label>Sweetalert2</label>,
        link: '/sweetalert2'
      })
    ]
  }),
  new BurgerElement({
    uid: key(),
    icon: <FontAwesomeIcon icon="flask" />,
    name: <label>Reactive Test</label>,
    link: '/test'
  })
];