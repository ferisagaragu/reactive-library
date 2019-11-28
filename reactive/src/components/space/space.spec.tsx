import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SpaceReactive } from './space.reactive';

it('test 1 - SpaceReactive: functionality test', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <SpaceReactive />, div
  ); 
  expect(div.innerHTML).toBe('&nbsp;'); 
  ReactDOM.unmountComponentAtNode(div);
});

it('test 2 - SpaceReactive: functionality test by attribute spaces', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <SpaceReactive spaces={ 2 } />, div
  );  
  expect(div.innerHTML).toBe('<i>&nbsp;</i><i>&nbsp;</i>');
  ReactDOM.unmountComponentAtNode(div);
});

it('test 3 - SpaceReactive: functionality test by sending the spaces attribute with negative numbers', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <SpaceReactive spaces={ -2 } />, div
  );  
  expect(div.innerHTML).toBe('');
  ReactDOM.unmountComponentAtNode(div);
});