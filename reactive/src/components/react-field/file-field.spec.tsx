import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as awesomeIcons from '@fortawesome/free-solid-svg-icons';
import { FileFieldReactive } from './file-field.reactive';
import { UserIcon } from '../login-form/res/user.icon';
import { library } from '@fortawesome/fontawesome-svg-core';
Enzyme.configure({ adapter: new Adapter() });

global['URL'].createObjectURL = jest.fn(() => 'details');

const icons: any = [
  awesomeIcons.faFileUpload,
  awesomeIcons.faSpinner
];
library.add(icons);

it('test 1 - FileField: functionality test', () => {
  const wrapper = Enzyme.mount(
    <FileFieldReactive
      onInit={ () => {} }
      accept="" 
      onSelectFile={ () => {} }
    />
  );
  wrapper.unmount();
});

it('test 2 - FileField: functionality test by preview and defaultImg attributes', () => {
  const wrapper = Enzyme.mount(
    <FileFieldReactive
      defaultImg="https://image.shutterstock.com/image-photo/beautiful-water-drop-on-dandelion-260nw-789676552.jpg" 
      accept="" 
      onSelectFile={ () => {} }
      preview 
    />
  );
  expect(wrapper.props().defaultImg).not.toBe('');
  expect(wrapper.props().preview).toBe(true);
  wrapper.unmount();
});

it('test 3 - FileField: functionality test by load file', () => {
  const wrapper = Enzyme.mount(
    <FileFieldReactive 
      isLoad={ true } 
      loadMessage="cargando..." 
      accept="" 
      onSelectFile={ () => {} }
    >
      hellow World
    </FileFieldReactive>
  );
  expect(wrapper.props().isLoad).toBe(true);
  expect(wrapper.props().loadMessage).not.toBe('');
  expect(wrapper.props().children).not.toBe('');
  wrapper.unmount();
});

it('test 4 - FileField: functionality test by show image preview', () => {
  const wrapper = Enzyme.mount(
    <FileFieldReactive accept="" onSelectFile={ () => {} } preview>
      hellow World
    </FileFieldReactive>
  );
  wrapper.setState({ fileRender: 'https://image.shutterstock.com/image-photo/beautiful-water-drop-on-dandelion-260nw-789676552.jpg' });
  expect(wrapper.find('img').props().src).not.toBe('');
  wrapper.unmount();
});

it('test 5 - FileField: functionality test by use children', () => {
  const wrapper = Enzyme.mount(
    <FileFieldReactive accept="" onSelectFile={ () => {} }>
      hellow World
    </FileFieldReactive>
  );
  expect(wrapper.props().children).toBe('hellow World');
  wrapper.unmount();
});

it('test 6 - FileField: functionality test by use children without load state', () => {
  const wrapper = Enzyme.mount(
    <FileFieldReactive isLoad loadMessage="" accept="" onSelectFile={ () => {} }>
      hellow World
    </FileFieldReactive>
  );
  expect(wrapper.props().children).toBe('hellow World');
  expect(wrapper.props().isLoad).toBe(true);
  expect(wrapper.props().loadMessage).toBe('');
  wrapper.unmount();
});

it('test 7 - FileField: functionality test by no selected file', () => {
  const wrapper = Enzyme.mount(
    <FileFieldReactive accept="" onSelectFile={ (file: any) => expect(file).toBe(null) } />
  );
  const fileFiled = wrapper.find('input[type="file"]');
  fileFiled.simulate('change', { target: {files: [null]} });
  wrapper.unmount();
});

it('test 8 - FileField: functionality test by selected file', () => {
  const wrapper = Enzyme.mount(
    <FileFieldReactive accept="" onSelectFile={ (file: any) => expect(file).not.toBe(null) } />
  );
  const fileFiled = wrapper.find('input[type="file"]');
  fileFiled.simulate('change', { target: {files: [new Blob(['fileContents'], {type : 'text/plain'})]} });
  wrapper.unmount();
});

it('test 9 - FileField: functionality test by especial comonent default', () => {
  const wrapper = Enzyme.mount(
    <FileFieldReactive 
      accept="" 
      onSelectFile={ () => {} } 
      preview={ true } 
      defaultImg={ <UserIcon /> } 
    />
  );
  expect(wrapper.find('svg')).not.toBe(null);  
  wrapper.unmount();
});