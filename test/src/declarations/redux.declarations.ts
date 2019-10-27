import { combineReducers, reducer } from 'reactive';
import { userData } from '../core/reducers/user-data.reducers';

export const reducers = combineReducers({
  form: reducer,
  userData
});

export const initState = {
  userData: {
    data: 'Hola princeso'
  }
};