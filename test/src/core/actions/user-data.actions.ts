import { Action } from 'reactive';
import { UserDataReducerEnum } from '../enums/user-data-reducer.enum';
import { toast } from 'reactive';

export function setUserData(payload: any): Action {
  if(!payload) {
    toast('info', 'Cerraste sesión cerrada');
  }
  return { type: UserDataReducerEnum.SET_USER_DATA, payload };
}