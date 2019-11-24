import { combineReducers, reducer, windowSize } from 'reactive';
import { userData } from '../core/reducers/user-data.reducers';

export const reducers = combineReducers({
  form: reducer,
  userData,
  windowSize
});

export const initState = {
  userData: {
    data: 'Hola princeso'
  }
};