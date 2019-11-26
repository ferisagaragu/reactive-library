import { React, ReactDOM } from 'reactive';
import ExportListComponent from './export-list.component';

it('test 1 - Export List', () => {
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

  const div = document.createElement('div');
  ReactDOM.render(<ExportListComponent exportData={ demoList }/>, div);  
  ReactDOM.unmountComponentAtNode(div);
});

it('test 2 - Export List', () => {
  const demoList: Array<any> = [];
  const div = document.createElement('div');
  ReactDOM.render(<ExportListComponent exportData={ demoList }/>, div); 
  expect(div.innerHTML.toString()).toBe('<ul></ul>');
  ReactDOM.unmountComponentAtNode(div);
});

it('test 3 - Export List', () => {
  const demoList: any = null;
  const div = document.createElement('div');
  ReactDOM.render(<ExportListComponent exportData={ demoList }/>, div); 
  ReactDOM.unmountComponentAtNode(div);
});