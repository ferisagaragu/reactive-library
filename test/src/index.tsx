import React from 'react';
import ReactDOM from 'react-dom';
import App from './modules/app';
import * as serviceWorker from './serviceWorker';
import { Provider, /*Router*/ } from 'reactive';
import { store } from './config/app.config';
import './reactive.css';
import './index.css';

ReactDOM.render(
  <Provider store={ store }>
    {/*<Router>*/}
      <App />
    {/*</Router>*/}
  </Provider>, 
  document.getElementById('root')
);
serviceWorker.unregister();
