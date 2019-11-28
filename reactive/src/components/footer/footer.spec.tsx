import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { FooterReactive } from './footer.reactive';

it('FooterReactive: functionality test', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <FooterReactive 
      className="test-css"
      left={ <label>left</label> }
      right={ <label>right</label> }
      center={ <label>center</label> }
    />, div
  );  
  ReactDOM.unmountComponentAtNode(div);
});

it('FooterReactive: functionality test by children', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <FooterReactive>
      test footer
    </FooterReactive>, div
  );  
  ReactDOM.unmountComponentAtNode(div);
});

it('FooterReactive: functionality test by sending null attributes', () => {
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
  ReactDOM.unmountComponentAtNode(div);
});