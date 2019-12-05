import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { SingleSelectReactive, MultiSelectReactive } from './select.reactive';
import { SelectElement } from '../../exports/model/select-element.model';
Enzyme.configure({ adapter: new Adapter() });

const singleData: Array<SelectElement> = [
  new SelectElement({
    value: 1,
    label: 'First data'
  }),
  new SelectElement({
    value: 2,
    label: 'Second data'
  }),
  new SelectElement({
    value: 3,
    label: 'Third data'
  })
]

it('test 1 - SingleSelect: functionality test', () => {
  const wrapper = Enzyme.mount(
    <SingleSelectReactive 
      options={ [] }
      onChange={ () => {} }
    />
  );
  wrapper.unmount();
});

it('test 2 - SingleSelect: functionality test by search select', () => {
  const wrapper = Enzyme.mount(
    <SingleSelectReactive 
      options={ singleData }
      onChange={ () => {} }
      noOptionsMessage="No results"
      isSearchable
    />
  );
  const select: any = wrapper.find('Select');
  expect(select.props().noOptionsMessage()).toBe('No results');
  wrapper.unmount();
});

it('test 3 - SingleSelect: functionality test by search select without noOptionsMessage attribute', () => {
  const wrapper = Enzyme.mount(
    <SingleSelectReactive 
      options={ singleData }
      onChange={ () => {} }
      isSearchable
    />
  );
  const select: any = wrapper.find('Select');
  expect(select.props().noOptionsMessage()).toBe('');
  wrapper.unmount();
});



it('test 4 - MultiSelect: functionality test', () => {
  const wrapper = Enzyme.mount(
    <MultiSelectReactive 
      options={ [] }
      onChange={ () => {} }
    />
  );
  wrapper.unmount();
});

it('test 5 - MultiSelect: functionality test by selected item', () => {
  const wrapper = Enzyme.mount(
    <MultiSelectReactive 
      options={ singleData }
      onChange={ () => {} }
    />
  );
  const select = wrapper.find('.select__dropdown-indicator').at(0);
  select.simulate('mouseDown', { button: 0 });

  const elementFirst = wrapper.find('.select__option').at(1);
  elementFirst.simulate('click');
  wrapper.unmount();
});

it('test 6 - MultiSelect: functionality test by search select', () => {
  const wrapper = Enzyme.mount(
    <MultiSelectReactive 
      options={ singleData }
      onChange={ () => {} }
      noOptionsMessage="No results"
      isSearchable
    />
  );
  const select: any = wrapper.find('Select');
  expect(select.props().noOptionsMessage()).toBe('No results');
  wrapper.unmount();
});

it('test 7 - MultiSelect: functionality test by search select without noOptionsMessage attribute', () => {
  const wrapper = Enzyme.mount(
    <MultiSelectReactive 
      options={ singleData }
      onChange={ () => {} }
      isSearchable
    />
  );
  const select: any = wrapper.find('Select');
  expect(select.props().noOptionsMessage()).toBe('');
  wrapper.unmount();
});