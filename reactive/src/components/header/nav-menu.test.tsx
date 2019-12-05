import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as awesomeIcons from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { BurgerElement } from '../../exports/model/burger-element.model';
import { NavMenuReactive } from './nav-menu.reactive';
import { BrowserRouter as Router } from 'react-router-dom';
Enzyme.configure({ adapter: new Adapter() });

const icons: any = [
  awesomeIcons.faBoxes
];
library.add(icons);

global['window'] = Object.create(window);
Object.defineProperty(window, 'location', {
  value: {
    pathname: 'link'
  }
});

const data: Array<BurgerElement> = [
  new BurgerElement({
    uid: 'id',
    name: 'nombre',
    icon: 'icon',
    link: 'link'
  }),
  new BurgerElement({
    uid: 'id',
    name: 'nombre'
  }),
  new BurgerElement({
    uid: 'id',
    name: 'nombre',
    items: [
      new BurgerElement({
        uid: 'id',
        name: 'nombre',
        icon: 'icon2',
        link: 'link2'
      }),
      new BurgerElement({
        uid: 'id',
        name: 'nombre',
        link: 'link3'
      })
    ]
  })
];

it('test 1 - NavMenu: functionality test by pre select element', () => {
  const wrapper = Enzyme.mount(
    <Router>
      <NavMenuReactive 
        treeData={ data }
        onClick={ () => {} }
      />
    </Router>
  );
  wrapper.unmount();
});