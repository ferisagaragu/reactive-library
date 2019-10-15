import keyReactive from './components/key/key.reactive';
import { toastReactive, alertReactive, alertQuestionReactive } from './components/swal/swal.reactive';
import 'bootstrap/dist/css/bootstrap.min.css';

//uniqid
export const key = keyReactive;

//sweetalert2
export const toast = toastReactive;
export const alert = alertReactive;
export const alertQuestion = alertQuestionReactive;
