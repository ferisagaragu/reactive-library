import { combineReducers } from 'redux';
import { reducerForm } from '../imports/react-redux.import';

export const reducers = combineReducers({
  form: reducerForm
});

export const initState = {};