import { Action } from 'reactive';
import { UserDataReducerEnum } from '../enums/user-data-reducer.enum';

export function setUserData(payload: any): Action {
  return { type: UserDataReducerEnum.SET_USER_DATA, payload };
}