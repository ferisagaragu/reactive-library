import { Action } from 'reactive';
import { UserDataReducerEnum } from '../enums/user-data-reducer.enum';

export const userData = (state = {}, action: Action) => {
  if (action.type === UserDataReducerEnum.SET_USER_DATA) {
    return action.payload;
  }
  return state;
}

export const statusLogin = (state = {}, action: Action) => {
  if (action.type === UserDataReducerEnum.SET_STATUS_LOGIN) {
    return action.payload;
  }
  return state;
}