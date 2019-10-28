import keyReactive from './components/key/key.reactive';
import { toastReactive, alertReactive, alertQuestionReactive } from './components/swal/swal.reactive';
import RenderTableReactive from './components/table/render-table.reactive';
import { FirebaseReactive, initializeFirebaseAppReactive } from './components/firebase/firebase.reactive';
import { ModalReactive } from './components/modal/modal.reactive';
import { foreachJSONReactive, oderJSONByReactive, convertJSONToArrayReactive, removeInJSONArrayReactive, replaceInJSONArrayReactive, isJSONReactive } from './components/util/json.reactive'; 
import { splitArrayReactive } from './components/util/array.reactive';
import HeaderReactive from './components/header/header.reactive';
import FooterReactive from './components/footer/footer.reactive';
import TreeReactive from './components/tree/tree.reactive';
import { findByTypeReactive } from './components/util/react-util.reactive';
import './config/app.config';
import 'bootstrap/dist/css/bootstrap.min.css';

//uniqid
export const key = keyReactive;

//sweetalert2
export const toast = toastReactive;
export const alert = alertReactive;
export const alertQuestion = alertQuestionReactive;

//reactive
export const Table = RenderTableReactive;
export const Modal = ModalReactive;
export const Header = HeaderReactive;
export const Footer = FooterReactive;
export const Tree = TreeReactive;

//util
export const foreachJSON = foreachJSONReactive;
export const oderJSONBy = oderJSONByReactive;
export const convertJSONToArray = convertJSONToArrayReactive;
export const removeInJSONArray = removeInJSONArrayReactive;
export const splitArray = splitArrayReactive;
export const replaceInJSONArray = replaceInJSONArrayReactive;
export const findByType = findByTypeReactive;
export const isJSON = isJSONReactive;

//firebase
export const Firebase = FirebaseReactive;
export const initializeFirebaseApp = initializeFirebaseAppReactive;

//redux
const redux = require('redux');
const reactRedux = require('react-redux');
const reduxThunk = require('redux-thunk');
const reduxForm = require('redux-form');

export const createStore = redux.createStore;
export const applyMiddleware = redux.applyMiddleware;
export const compose = redux.compose;
export const combineReducers = redux.combineReducers;
export const Provider = reactRedux.Provider;
export const connect = reactRedux.connect;
export const thunk = reduxThunk.default;
export const reducer = reduxForm.reducer;

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