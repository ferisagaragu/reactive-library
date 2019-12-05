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
    pathname: 'link2'
  }
});

const data: Array<BurgerElement> = [
  new BurgerElement({
    uid: '1',
    name: 'nombre',
    icon: 'icon',
    link: 'link'
  }),
  new BurgerElement({
    uid: '2',
    name: 'nombre'
  }),
  new BurgerElement({
    uid: '3',
    name: 'nombre',
    items: [
      new BurgerElement({
        uid: '4',
        name: 'nombre',
        icon: 'icon2',
        link: 'link2'
      }),
      new BurgerElement({
        uid: '5',
        name: 'nombre',
        link: 'link3'
      })
    ]
  }),
  new BurgerElement({
    uid: '6',
    name: 'nombre',
    items: [
      new BurgerElement({
        uid: '7',
        name: 'nombre',
        icon: 'icon2',
        link: 'link2'
      }),
      new BurgerElement({
        uid: '8',
        name: 'nombre',
        link: 'link3'
      })
    ]
  })
];

it('test 1 - NavMenu: functionality test', () => {
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

it('test 2 - NavMenu: functionality test by click element', () => {
  const wrapper = Enzyme.mount(
    <Router>
      <NavMenuReactive 
        treeData={ data }
        onClick={ () => jest.fn() }
      />
    </Router>
  );
  wrapper.find('Link').at(0).find('div').simulate('click');
  wrapper.unmount();
});

it('test 3 - NavMenu: functionality test by expanded menu', () => {
  const wrapper = Enzyme.mount(
    <Router>
      <NavMenuReactive 
        treeData={ data }
        onClick={ () => jest.fn() }
      />
    </Router>
  );
  wrapper.find('NavMenuItemReactive').at(0).simulate('click');
  wrapper.unmount();
});

it('test 3 - NavMenu: functionality test by expanded menu and selected element', () => {
  const wrapper = Enzyme.mount(
    <Router>
      <NavMenuReactive 
        treeData={ data }
        onClick={ () => jest.fn() }
      />
    </Router>
  );
  const menuProps: any = wrapper.find('NavMenuItemReactive').at(0).props();
  menuProps.onClick(data[2]);
  wrapper.find('Link').at(3).simulate('click');
  wrapper.find('div').at(12).simulate('click');
  wrapper.unmount();
});

it('test 4 - NavMenu: functionality test by expanded other element and timer expand', () => {
  const wrapper = Enzyme.mount(
    <Router>
      <NavMenuReactive 
        treeData={ data }
        onClick={ () => jest.fn() }
      />
    </Router>
  );
  const menuProps: any = wrapper.find('NavMenuItemReactive').at(1).props();
  menuProps.onClick(data[2]);
  wrapper.unmount();
});

it('test 5 - NavMenu: functionality test by expanded other element and timer expand', () => {
  jest.useFakeTimers();
  const wrapper = Enzyme.mount(
    <Router>
      <NavMenuReactive 
        treeData={ data }
        onClick={ () => jest.fn() }
      />
    </Router>
  );
  const menuProps: any = wrapper.find('NavMenuItemReactive').at(1).props();
  menuProps.onClick(data[2]);
  jest.runAllTimers();
  wrapper.unmount();
});