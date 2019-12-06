import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { MaskFieldReactive } from './mask-field.reactive';
Enzyme.configure({ adapter: new Adapter() });

it('test 1 - FileField: functionality test', () => {
  const wrapper = Enzyme.mount(
    <MaskFieldReactive className="example" onInit={ () => {} } value="hola" placeholder="Mascara" />
  );
  wrapper.unmount();
});

it('test 2 - FileField: functionality test without value attribute', () => {
  const wrapper = Enzyme.mount(
    <MaskFieldReactive onInit={ () => {} } mask="99" />
  );
  wrapper.unmount();
});

it('test 3 - FileField: functionality test by change value', () => {
  const wrapper = Enzyme.mount(
    <MaskFieldReactive onInit={ () => {} } mask="99" onChange={ () => {} } />
  );

  const input = wrapper.find('input');
  input.simulate('change',{ target: { value: '10' } });
  expect(input.instance()['value']).toBe('10');
  wrapper.unmount();
});