import * as react_redux from 'react-redux';
import {
  reducer as _reducer,
  Field as _field,
  reduxForm as _reduxForm,
  SubmissionError as _SubmissionError,
  reset as _reset
} from 'redux-form';

export const { Provider, connect } = react_redux;
export const reducerForm = _reducer;
export const Field = _field;
export const reduxForm = _reduxForm;
export const SubmissionError = _SubmissionError;
export const reset = _reset;