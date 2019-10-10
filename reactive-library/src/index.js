import './config/app.config';
import 'bootstrap/dist/css/bootstrap.css';

//COMPONENTS
import { TableReactive as _table } from './components/table/table.reactive';

export const Table = _table;
//==========================

//FUNCTIONS
import { key as _key } from './components/key/key.reactive';
import { toast as _toast, alert as _alert, alertQuestion as _alertQuestion } from './components/swal/swal.reactive';

export const key = _key;
export const toast = _toast;
export const alert = _alert;
export const alertQuestion = _alertQuestion;
//==========================