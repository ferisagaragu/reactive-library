import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { SpaceReactive } from './space.reactive';
Enzyme.configure({ adapter: new Adapter() });

it('test 1 - SpaceReactive: functionality test', () => {
  const wrapper = Enzyme.mount(
    <SpaceReactive />
  );
  wrapper.unmount();
});

it('test 2 - SpaceReactive: functionality test by attribute spaces', () => {
  const wrapper = Enzyme.mount(
    <SpaceReactive spaces={ 2 } />
  );
  expect(wrapper.find('i').length).toBe(2);
  wrapper.unmount();
});

it('test 3 - SpaceReactive: functionality test by sending the spaces attribute with negative numbers', () => {
  const wrapper = Enzyme.mount(
    <SpaceReactive spaces={ -2 } />
  );
  expect(wrapper.html()).toBe(null);
  wrapper.unmount();
});