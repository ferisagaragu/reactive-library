import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as awesomeIcons from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { BrowserRouter as Router } from 'react-router-dom';
import NavMenuItemReactive from './nav-menu-item.reactive';
Enzyme.configure({ adapter: new Adapter() });

const icons: any = [
  awesomeIcons.faBoxes
];
library.add(icons);

it('test 1 - NavMenuItem: functionality test', () => {
  const wrapper = Enzyme.mount(
    <Router>
      <NavMenuItemReactive 
        icon={ <></> }
        label="test"
        child={ <></> }
        onClick={ () => {} }
      />
    </Router>
  );
  wrapper.unmount();
});

it('test 2 - NavMenuItem: functionality test with use expanded attribute', () => {
  const wrapper = Enzyme.mount(
    <Router>
      <NavMenuItemReactive 
        icon={ <></> }
        label="test"
        child={ <></> }
        onClick={ () => {} }
        expanded
      />
    </Router>
  );
  expect(wrapper.props().children.props.expanded).toBe(true);
  wrapper.unmount();
});

it('test 3 - NavMenuItem: functionality by onClick in accordion element and icon null', () => {
  const icon: any = null;
  
  const wrapper = Enzyme.mount(
    <Router>
      <NavMenuItemReactive 
        icon={ icon }
        label="test"
        child={ <></> }
        onClick={ () => {} }
      />
    </Router>
  );
  wrapper.find('.bm-reactive').at(0).simulate('click');
  expect(wrapper.props().children.props.icon).toBe(null);
  wrapper.unmount();
});

it('test 4 - NavMenuItem: functionality by use link attribute', () => {
  const wrapper = Enzyme.mount(
    <Router>
      <NavMenuItemReactive 
        icon={ <></> }
        label="test"
        child={ <></> }
        onClick={ () => {} }
        link="#"
      />
    </Router>
  );
  expect(wrapper.props().children.props.link).toBe('#');
  wrapper.unmount();
});