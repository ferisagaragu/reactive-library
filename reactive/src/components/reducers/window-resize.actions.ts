import { Action } from '../../exports/interface/action.export';
import { WindowEventReactive } from './window-event.reactive';

export function setWindowSize(payload: any): Action {
  return { type: 'onResizeWindow', payload };
}

export function onWindowResize(): Function {
  return async (dispatch: Function) => {
    new WindowEventReactive().onWindowResize((size: string) => {
      dispatch(setWindowSize(size));
    });
  }
}