import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { ModalReactive } from './modal.reactive';
Enzyme.configure({ adapter: new Adapter() });

it('test 1 - Modal: functionality test', () => {
  const wrapper = Enzyme.mount(
    <ModalReactive 
      title="Example"
      modalShow={ true }
      onHide={ () => {} }
      size="sm"
    />
  );
  wrapper.unmount();
});

it('test 2 - Modal: functionality test hide button', () => {
  const wrapper = Enzyme.mount(
    <ModalReactive 
      title="Example"
      modalShow={ true }
      onHide={ () => {} }
      size="sm"
      closeButton={ true }
    />
  );
  wrapper.find('button').simulate('click');
  wrapper.unmount();
});