import React from 'react';
import { ReactDOM, Enzyme, Adapter } from 'reactive';
import FunctionTableComponent from './fuction-table.component';
Enzyme.configure({ adapter: new Adapter() });

it('test 1 - FunctionTableComponent: functionality test', () => {
  const propsDemo: Array<any> = [
    {
      functionName: 'createUserWithEmailAndPassword',
      params: 'email: string, password: string, onRegist: Function, onError?: Function | undefined',
      returnStr: 'void',
      description: 'Este es para crear un usuario basado en un email y una contraseña'
    },{
      functionName: 'signInWithEmailAndPassword',
      params: 'email: string, password: string, onLogIn: Function, onError?: Function | undefined',
      returnStr: 'void',
      description: 'Este es para iniciar sesión con un email y contraseña previamente registrado',
      required: true
    }
  ]
  const wrapper = Enzyme.mount(<FunctionTableComponent propsData={ propsDemo }/>);
  wrapper.unmount();
});

it('test 2 - FunctionTableComponent: functionality test by empty parameter submission test', () => {
  const wrapper = Enzyme.mount(<FunctionTableComponent propsData={ [] }/>);
  wrapper.unmount();
});

it('test 3 - FunctionTableComponent: functionality test with sending null parameters', () => {
  const propsDemo: any = null;
  const wrapper = Enzyme.mount(<FunctionTableComponent propsData={ propsDemo }/>);
  wrapper.unmount();
});