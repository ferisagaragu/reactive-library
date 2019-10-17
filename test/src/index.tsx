import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import { Provider } from './imports/react-redux.import';
import { store } from './config/app.config';

const reactRedux = require('react-redux');

ReactDOM.render(
  <reactRedux.Provider store={ store }>
    <App />
  </reactRedux.Provider>, 
  document.getElementById('root')
);
serviceWorker.unregister();
