import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { FooterReactive } from './footer.reactive';
Enzyme.configure({ adapter: new Adapter() });

it('test 1 - FooterReactive: functionality test', () => {
  const wrapper = Enzyme.mount(
    <FooterReactive 
      className="test-css"
      left={ <label>left</label> }
      right={ <label>right</label> }
      center={ <label>center</label> }
    />
  );

  const left = wrapper.find('.text-left').find('label');
  expect(left.props().children).toBe('left');

  const right = wrapper.find('.text-right').find('label');
  expect(right.props().children).toBe('right');

  const center = wrapper.find('.text-center').find('label');
  expect(center.props().children).toBe('center');

  wrapper.unmount();
});

it('test 2 - FooterReactive: functionality test by children', () => {
  const wrapper = Enzyme.mount(
    <FooterReactive>
      test footer
    </FooterReactive>
  );
  
  expect(wrapper.find('footer').props().children).toBe('test footer');
  wrapper.unmount();
});

it('test 3 - FooterReactive: functionality test center without the parameter', () => {
  const wrapper = Enzyme.mount(
    <FooterReactive 
      className="test-css"
      left={ <label>left</label> }
      right={ <label>right</label> }
    />
  );
  
  const left = wrapper.find('.text-left').find('label');
  expect(left.props().children).toBe('left');

  const right = wrapper.find('.text-right').find('label');
  expect(right.props().children).toBe('right');

  const center = wrapper.find('.text-center');
  expect(center.exists()).toBe(false);

  wrapper.unmount();
});

it('test 4 - FooterReactive: functionality test by sending null attributes', () => {
  const demoData: any = null;

  const wrapper = Enzyme.mount(
    <FooterReactive 
      className="test-css"
      left={ demoData }
      right={ demoData }
      center={ demoData }
    />
  );

  expect(wrapper.find('footer').props().children).toBe(undefined);
  wrapper.unmount();
});