const redux = require('redux');
const reactRedux = require('react-redux');
const reduxThunk = require('redux-thunk');
const reduxForm = require('redux-form');

export const createStore = redux.createStore;
export const applyMiddleware = redux.applyMiddleware;
export const compose = redux.compose;
export const combineReducers = redux.combineReducers;
export const Provider = reactRedux.Provider;
export const connect = reactRedux.connect;
export const thunk = reduxThunk.default;
export const reducer = reduxForm.reducer;