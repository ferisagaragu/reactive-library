import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as awesomeIcons from '@fortawesome/free-solid-svg-icons';
import { FormBugReactive } from './form-bug.reactive';
import { Provider, createStore, combineReducers, reducer } from '../../exports/redux.export';
import { library } from '@fortawesome/fontawesome-svg-core';
import { problems, problemsLevel } from './data/select.data';
Enzyme.configure({ adapter: new Adapter() });

const store = createStore(combineReducers({ form: reducer }), {});

const icons: any = [
  awesomeIcons.faTimes,
  awesomeIcons.faCheck,
  awesomeIcons.faBug,
  awesomeIcons.faArrowDown,
  awesomeIcons.faClipboardList,
  awesomeIcons.faMagic,
  awesomeIcons.faMinus,
  awesomeIcons.faArrowUp,
  awesomeIcons.faBoxes,
  awesomeIcons.faMinus
];
library.add(icons);

it('test 1 - FormBug: functionality test', () => {
  const wrapper = Enzyme.mount(
    <Provider store={ store }>
      <FormBugReactive 
        submitActions={ () => {} }
        cancel={ () => {} }
        initialValues={{
          problemType: problems[0],
          levelProblem: problemsLevel[0]
        }}
      />
    </Provider>
  );
  wrapper.unmount();
});

it('test 2 - FormBug: functionality test by validation when clicking submit, the messages must be output is required in each field', () => {
  const wrapper = Enzyme.mount(
    <Provider store={ store }>
      <FormBugReactive 
        submitActions={ () => {} }
        cancel={ () => {} }
      />
    </Provider>
  );

  const form = wrapper.find('form');
  form.simulate('submit');

  const messages = wrapper.find('.text-danger');
  expect(messages.at(0).props().children).toBe('El tipo de problema es requerido');
  expect(messages.at(1).props().children).toBe('La descripción es requerida');

  wrapper.unmount();
});

it('test 3 - FormBug: functionality test by validation when clicking submit, you should leave the message required in the "Problem level" field', () => {
  const wrapper = Enzyme.mount(
    <Provider store={ store }>
      <FormBugReactive 
        submitActions={ () => {} }
        cancel={ () => {} }
        initialValues={{
          problemType: problems[0]
        }}
      />
    </Provider>
  );

  const form = wrapper.find('form');
  form.simulate('submit');

  const messages = wrapper.find('.text-danger');
  expect(messages.at(1).props().children).toBe('El tipo nivel del problema es requerido');

  wrapper.unmount();
});

it('test 4 - FormBug: functionality test by validation when clicking submit, you must return values in the submitActions event', () => {
  const wrapper = Enzyme.mount(
    <Provider store={ store }>
      <FormBugReactive 
        submitActions={ (data: any) => expect(data).not.toBe(!null) }
        cancel={ () => {} }
        initialValues={{
          problemType: problems[0],
          levelProblem: problemsLevel[0],
          description: 'test text'
        }}
      />
    </Provider>
  );

  const form = wrapper.find('form');
  form.simulate('submit');

  wrapper.unmount();
});

it('test 5 - FormBug: functionality test by validation when clicking submit, without the level of the problem, it must return values in the submitActions event', () => {
  const wrapper = Enzyme.mount(
    <Provider store={ store }>
      <FormBugReactive 
        submitActions={ (data: any) => expect(data).not.toBe(!null) }
        cancel={ () => {} }
        initialValues={{
          problemType: problems[1],
          description: 'test text'
        }}
      />
    </Provider>
  );

  const form = wrapper.find('form');
  form.simulate('submit');

  wrapper.unmount();
});

it('test 6 - FormBug: functionality test by clicking on the cancel button', () => {
  const wrapper = Enzyme.mount(
    <Provider store={ store }>
      <FormBugReactive 
        submitActions={ () => {} }
        cancel={ () => {} }
      />
    </Provider>
  );

  const cancelButton = wrapper.find('button[type="button"]');
  cancelButton.simulate('click');

  wrapper.unmount();
});

it('test 7 - FormBug: functionality test when changing the type of problem', () => {
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
  
  wrapper.unmount();
});

it('test 8 - FormBug: functionality test when selecting each of the problem levels', () => {
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
});