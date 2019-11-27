import React from 'react';
import App from './modules/app';
import * as serviceWorker from './serviceWorker';
import { Provider, Router, ReactDOM } from 'reactive';
import { store } from './config/app.config';
import 'reactive/dist/style/reactive.css';
import './styles/stylesheet/index.css';

ReactDOM.render(
  <Provider store={ store }>
    <Router>
      <App />
    </Router>
  </Provider>, 
  document.getElementById('root')
);
serviceWorker.unregister();
