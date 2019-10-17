import { Action } from '../interfaces/action.interface';
import { UserDataReducerEnum } from '../enums/user-data-reducer.enum';

export const userData = (state = {}, action: Action) => {
  switch(action.type) {
    case UserDataReducerEnum.SET_USER_DATA: return action.payload;
    default: return state;
  }
}

export const statusLogin = (state = {}, action: Action) => {
  switch(action.type) {
    case UserDataReducerEnum.SET_STATUS_LOGIN: return action.payload;
    default: return state;
  }
}