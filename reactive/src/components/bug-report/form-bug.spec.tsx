import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as awesomeIcons from '@fortawesome/free-solid-svg-icons';
import { FormBugReactive } from './form-bug.reactive';
import { Provider, createStore, combineReducers, reducer } from '../../exports/redux.export';
import { library } from '@fortawesome/fontawesome-svg-core';
import { problems, problemsLevel } from './data/select.data';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const store = createStore(combineReducers({ form: reducer }), {});

const icons: any = [
  awesomeIcons.faTimes,
  awesomeIcons.faCheck,
  awesomeIcons.faBug,
  awesomeIcons.faArrowDown,
  awesomeIcons.faClipboardList,
  awesomeIcons.faMagic
];
library.add(icons);

it('test 1 -', () => {
  const div = document.createElement('div'); 
  
  ReactDOM.render(
    <Provider store={ store }>
      <FormBugReactive 
        submitActions={ () => {} }
        cancel={ () => {} }
        initialValues={{
          problemType: problems[0],
          levelProblem: problemsLevel[0]
        }}
      />
    </Provider>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});

it('test 2 - valid form', () => {
  const div = document.createElement('div'); 
  document.body.appendChild(div);
  
  ReactDOM.render(
    <Provider store={ store }>
      <FormBugReactive 
        submitActions={ () => {} }
        cancel={ () => {} }
      />
    </Provider>,
    div
  );

  const submit = div.getElementsByTagName('button')[1];
  submit.dispatchEvent(new MouseEvent('click', {bubbles: true}));

  const resDivs = div.getElementsByClassName('text-danger');
  expect(resDivs[0].innerHTML).toBe('El tipo de problema es requerido');
  expect(resDivs[1].innerHTML).toBe('La descripción es requerida');

  ReactDOM.unmountComponentAtNode(div);
  document.body.removeChild(div);
});

it('test 3 - form cancel', () => {
  const div = document.createElement('div'); 
  document.body.appendChild(div);
  
  ReactDOM.render(
    <Provider store={ store }>
      <FormBugReactive 
        submitActions={ () => {} }
        cancel={ () => {} }
      />
    </Provider>,
    div
  );

  const submit = div.getElementsByTagName('button')[0];
  submit.dispatchEvent(new MouseEvent('click', {bubbles: true}));

  ReactDOM.unmountComponentAtNode(div);
  document.body.removeChild(div);
});

it('test 4 - form submit', () => {
  const div = document.createElement('div'); 
  document.body.appendChild(div);
  
  ReactDOM.render(
    <Provider store={ store }>
      <FormBugReactive 
        submitActions={ () => jest.fn() }
        cancel={ () => {} }
        initialValues={{
          problemType: problems[0],
          levelProblem: problemsLevel[0],
          description: 'example text'
        }}
      />
    </Provider>,
    div
  );

  const submit = div.getElementsByTagName('button')[1];
  submit.dispatchEvent(new MouseEvent('click', {bubbles: true}));

  ReactDOM.unmountComponentAtNode(div);
  document.body.removeChild(div);
});

it('test 5 - form submit sin tipo del problema', () => {
  const div = document.createElement('div'); 
  document.body.appendChild(div);
  
  ReactDOM.render(
    <Provider store={ store }>
      <FormBugReactive 
        submitActions={ () => jest.fn() }
        cancel={ () => {} }
        initialValues={{
          problemType: problems[1],
          description: 'example text'
        }}
      />
    </Provider>,
    div
  );

  const submit = div.getElementsByTagName('button')[1];
  submit.dispatchEvent(new MouseEvent('click', {bubbles: true}));

  ReactDOM.unmountComponentAtNode(div);
  document.body.removeChild(div);
});

it('test 6 - form submit sin el nivel del problema lleno', () => {
  const div = document.createElement('div'); 
  document.body.appendChild(div);
  
  ReactDOM.render(
    <Provider store={ store }>
      <FormBugReactive 
        submitActions={ () => jest.fn() }
        cancel={ () => {} }
        initialValues={{
          problemType: problems[0],
          description: 'example text'
        }}
      />
    </Provider>,
    div
  );

  const submit = div.getElementsByTagName('button')[1];
  submit.dispatchEvent(new MouseEvent('click', {bubbles: true}));
      
  const labelResult = div.getElementsByClassName('text-danger')[1];
  expect(labelResult.innerHTML).toBe('El tipo nivel del problema es requerido');

  ReactDOM.unmountComponentAtNode(div);
  document.body.removeChild(div);
});

it('test 7 - form submit al cambiar el tipo de problema css-2b097c-container', () => {
  const wrapper = Enzyme.mount(
    <Provider store={ store }>
      <FormBugReactive 
        submitActions={ () => jest.fn() }
        cancel={ () => {} }
      />
    </Provider>
  );

  const select = wrapper.find('.select__dropdown-indicator').at(0);
  select.simulate('mouseDown', { button: 0 });

  const elementFirst = wrapper.find('.select__option').at(1);
  elementFirst.simulate('click');

  select.simulate('mouseDown', { button: 0 });
  const elementSecond = wrapper.find('.select__option').at(2);
  elementSecond.simulate('click');
});

it('test 8 - form submit al cambiar el tipo de problema css-2b097c-container', () => {
  const wrapper = Enzyme.mount(
    <Provider store={ store }>
      <FormBugReactive 
        submitActions={ () => jest.fn() }
        cancel={ () => {} }
        initialValues={{
          problemType: problems[0]
        }}
      />
    </Provider>
  );

  const select = wrapper.find('.select__dropdown-indicator').at(2);
  select.simulate('mouseDown', { button: 0 });

  const elementFirst = wrapper.find('.select__option').at(1);
  elementFirst.simulate('click');

  select.simulate('mouseDown', { button: 0 });
  const elementSecond = wrapper.find('.select__option').at(2);
  elementSecond.simulate('click');

  select.simulate('mouseDown', { button: 0 });
  const elementThird = wrapper.find('.select__option').at(4);
  elementThird.simulate('click');

  console.log(wrapper.find('.select__option').debug())
});


/*

const wrapper = Enzyme.mount(
    <Provider store={ store }>
      <FormBugReactive 
        submitActions={ () => jest.fn() }
        cancel={ () => {} }
        initialValues={{
          problemType: problems[0]
        }}
      />
    </Provider>
  );

  const select = wrapper.find('form');
  select.simulate('submit');

  

  //console.log(wrapper.update().debug());

  console.log(wrapper.find('.text-danger').at(2).debug());
 */