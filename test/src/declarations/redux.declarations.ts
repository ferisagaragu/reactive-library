import { combineReducers } from 'redux';
import { userData } from '../core/reducers/user-data.reducers';
//import { reducerForm } from '../imports/react-redux.import';
const reduxForm = require('redux-form');

export const reducers = combineReducers({
  form: reduxForm.reducer,
  userData
});

export const initState = {
  userData: {
    data: 'Hola princeso'
  }
};