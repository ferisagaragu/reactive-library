import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { GradientButtonReactive } from './gradient-button.reactive';
Enzyme.configure({ adapter: new Adapter() });

it('test 1 - GradientButton: functionality test', () => {
  const wrapper = Enzyme.mount(
    <GradientButtonReactive variant="black-gray" />
  );
  wrapper.unmount();
});

it('test 1 - GradientButton: functionality test by onClick', () => {
  const wrapper = Enzyme.mount(
    <GradientButtonReactive variant="black-gray" onClick={ () => {} }/>
  );
  wrapper.simulate('click');
  wrapper.unmount();
});