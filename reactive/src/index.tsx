import keyReactive from './components/key/key.reactive';
import { toastReactive, alertReactive, alertQuestionReactive } from './components/swal/swal.reactive';
import TableReactive from './components/table/table.reactive';
import { Firebase as _Firebase, initializeFirebaseApp as _initializeFirebaseApp } from './components/firebase/firebase.reactive';
import 'bootstrap/dist/css/bootstrap.min.css';

//uniqid
export const key = keyReactive;

//sweetalert2
export const toast = toastReactive;
export const alert = alertReactive;
export const alertQuestion = alertQuestionReactive;

//reactive
export const Table = TableReactive;

//firebase
export const Firebase = _Firebase;
export const initializeFirebaseApp = _initializeFirebaseApp;

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