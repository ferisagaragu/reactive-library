import React from 'react';
import App from './modules/app';
import * as serviceWorker from './serviceWorker';

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
