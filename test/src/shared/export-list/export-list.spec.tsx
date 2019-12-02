import React from 'react';
import { ReactDOM, Enzyme, Adapter } from 'reactive';
import ExportListComponent from './export-list.component';
Enzyme.configure({ adapter: new Adapter() });

it('test 1 - ExportListComponent: functionality test', () => {
  const demoList: Array<any> = [
    'createStore',
    'applyMiddleware',
    'compose',
    'combineReducers',
    'Provider',
    'connect',
    'thunk',
    'reducer',
    'change',
    'untouch'
  ];
  
  const wrapper = Enzyme.mount(
    <ExportListComponent exportData={ demoList }/>
  );
  wrapper.unmount();
});

it('test 2 - ExportListComponent: functionality test by empty parameter submission test', () => {
  const wrapper = Enzyme.mount(<ExportListComponent exportData={ [] }/>);
  expect(wrapper.find('ul').props().children.length).toBe(0);
  wrapper.unmount();
});

it('test 3 - ExportListComponent: functionality test with sending null parameters', () => {
  const demoList: any = null;
  const wrapper = Enzyme.mount(<ExportListComponent exportData={ demoList }/>);
  wrapper.unmount();
});