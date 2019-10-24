import keyReactive from './components/key/key.reactive';
import { toastReactive, alertReactive, alertQuestionReactive } from './components/swal/swal.reactive';
import RenderTableReactive from './components/table/render-table.reactive';
import { FirebaseReactive, initializeFirebaseAppReactive } from './components/firebase/firebase.reactive';
import { ModalReactive } from './components/modal/modal.component';
import { foreachJSONReactive, oderJSONByReactive, convertJSONToArrayReactive, removeInJSONArrayReactive } from './components/util/json.reactive'; 
import { splitArrayReactive } from './components/util/array.reactive';
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

//util
export const foreachJSON = foreachJSONReactive;
export const oderJSONBy = oderJSONByReactive;
export const convertJSONToArray = convertJSONToArrayReactive;
export const removeInJSONArray = removeInJSONArrayReactive;
export const splitArray = splitArrayReactive;

//firebase
export const Firebase = FirebaseReactive;
export const initializeFirebaseApp = initializeFirebaseAppReactive;

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