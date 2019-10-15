import keyReactive from './components/key/key.reactive';
import { toastReactive, alertReactive, alertQuestionReactive } from './components/swal/swal.reactive';
import TableReactive from './components/table/table.reactive';
import 'bootstrap/dist/css/bootstrap.min.css';

//uniqid
export const key = keyReactive;

//sweetalert2
export const toast = toastReactive;
export const alert = alertReactive;
export const alertQuestion = alertQuestionReactive;

//reactive
export const Table = TableReactive;

//redux
export const { createStore, applyMiddleware, compose, combineReducers } = require('redux');
export const { Provider, connect } = require('react-redux');
export const thunk = require('redux-thunk');
export const {
  reducer,
  Field,
  reduxForm,
  SubmissionError,
  reset
} = require('redux-form');



//reactive - types
export class HeaderTable {
  key: string;
  label: string;
  type: string;
  required: boolean;
  placeholder?: string;

  constructor(data: any | HeaderTable) {
    this.key =  '';
    this.label = '';
    this.type = 'text';
    this.required = false;
    this.placeholder = '';
    Object.assign(this, data);
  }
}