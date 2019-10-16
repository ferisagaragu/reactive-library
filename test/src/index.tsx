import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from './imports/react-redux.import';
import { store } from './config/app.config';

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>, 
  document.getElementById('root')
);
serviceWorker.unregister();
