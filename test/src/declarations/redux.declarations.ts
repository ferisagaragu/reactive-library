import { combineReducers, reducer, windowSize, UserData } from 'reactive';
import { userData } from '../core/reducers/user-data.reducers';

export const reducers = combineReducers({
  form: reducer,
  userData,
  windowSize
});

export const initState = {
  userData: new UserData({
    uid: 'a2NRaH9vsSM99uC88fgSbLsOkPb2',
    displayName: 'fernnypay95',
    email: 'ferisagaragu@gmail.com',
    phoneNumber: '+52 (33) 23-81-47-52',
    photoURL: 'https://firebasestorage.googleapis.com/v0/b/test-reactive.appspot.com/o/user-img%2Fk3es5vmv?alt=media&token=2337214d-d243-45c5-af56-148b2349fd0a',
    role: 1,
    from: 'email-password',
    active: true,
    name: 'Fernando Isaías',
    lastName: 'García Aguirre'
  })
};