import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { CheckBoxReactive } from './checkbox.reactive';
Enzyme.configure({ adapter: new Adapter() });

it('test 1 - CheckBox: functionality test', () => {
  const wrapper = Enzyme.mount(
    <CheckBoxReactive />
  );
  wrapper.unmount();
});

it('test 2 - CheckBox: functionality test by checked in true', () => {
  const wrapper = Enzyme.mount(
    <CheckBoxReactive checked={ true } />
  );
  expect(wrapper.props().checked).toBe(true);
  wrapper.unmount();
});

it('test 3 - CheckBox: functionality test by function onInit', () => {
  const wrapper = Enzyme.mount(
    <CheckBoxReactive onInit={ () => {} } checked={ true } />
  );
  expect(wrapper.props().onInit).not.toBe(null);
  wrapper.unmount();
});