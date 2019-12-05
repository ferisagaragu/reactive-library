import { Action } from '../../exports/interface/action.export';

export const windowSize = (state = {}, action: Action) => {
  if (action.type === 'onResizeWindow') {
    return action.payload;
  }
  return state;
}