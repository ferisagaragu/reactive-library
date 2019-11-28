import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { FooterReactive } from './footer.reactive';

it('test 1 - FooterReactive: functionality test', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <FooterReactive 
      className="test-css"
      left={ <label>left</label> }
      right={ <label>right</label> }
      center={ <label>center</label> }
    />, div
  );  
  expect(div.getElementsByClassName('text-left')[0].innerHTML).toBe('<label>left</label>');
  expect(div.getElementsByClassName('text-center')[0].innerHTML).toBe('<label>center</label>');
  expect(div.getElementsByClassName('text-right')[0].innerHTML).toBe('<label>right</label>');
  ReactDOM.unmountComponentAtNode(div);
});

it('test 2 - FooterReactive: functionality test by children', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <FooterReactive>
      test footer
    </FooterReactive>, div
  );  
  expect(div.getElementsByClassName('footer-reactive')[0].innerHTML).toBe('test footer');
  ReactDOM.unmountComponentAtNode(div);
});

it('test 3 - FooterReactive: functionality test center without the parameter', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <FooterReactive 
      className="test-css"
      left={ <label>left</label> }
      right={ <label>right</label> }
    />, div
  );  
  expect(div.getElementsByClassName('text-left')[0].innerHTML).toBe('<label>left</label>');
  expect(div.getElementsByClassName('text-center').length).toBe(0);
  expect(div.getElementsByClassName('text-right')[0].innerHTML).toBe('<label>right</label>');
  ReactDOM.unmountComponentAtNode(div);
});

it('test 4 - FooterReactive: functionality test by sending null attributes', () => {
  const demoData: any = null;
  const div = document.createElement('div');
  ReactDOM.render(
    <FooterReactive 
      className="test-css"
      left={ demoData }
      right={ demoData }
      center={ demoData }
    />, div
  );  
  expect(div.innerHTML).toBe('<footer class="footer-reactive test-css"></footer>');
  ReactDOM.unmountComponentAtNode(div);
});