import { React, ReactDOM } from 'reactive';
import FunctionTableComponent from './fuction-table.component';

it('test 1 - Function Table', () => {
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

  const div = document.createElement('div');
  ReactDOM.render(<FunctionTableComponent propsData={ propsDemo }/>, div);  
  ReactDOM.unmountComponentAtNode(div);
});

it('test 2 - Function Table', () => {
  const propsDemo: Array<any> = [];
  const div: any = document.createElement('div');
  ReactDOM.render(<FunctionTableComponent propsData={ propsDemo }/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('test 3 - Function Table', () => {
  const propsDemo: any = null;
  const div = document.createElement('div');
  ReactDOM.render(<FunctionTableComponent propsData={ propsDemo }/>, div); 
  ReactDOM.unmountComponentAtNode(div);
});