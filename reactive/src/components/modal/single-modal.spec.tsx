import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { SingleModalReactive } from './single-modal.reactive';
Enzyme.configure({ adapter: new Adapter() });

it('test 1 - SingleModal: functionality test', () => {
  const wrapper = Enzyme.mount(
    <SingleModalReactive 
      modalShow={ true }
      size={ 'sm' }
      centered={ true }
      onHide={ () => {} }
    />
  );
  wrapper.unmount();
});

it('test 2 - SingleModal: functionality test by hide', () => {
  const wrapper = Enzyme.mount(
    <SingleModalReactive 
      modalShow={ true }
      size={ 'sm' }
      centered={ true }
      onHide={ () => {} }
    />
  );
  console.log(wrapper.find('.show').at(0).simulate('click'));
  wrapper.unmount();
});