import { createStore, applyMiddleware, compose } from 'redux';
import { reducers, initState } from '../declarations/redux.declarations';
import { initializeFirebaseApp } from 'reactive';
import thunk from 'redux-thunk';

//REDUX
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, initState, composeEnhancers(applyMiddleware(thunk)));

//FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyB8lK-S0bBMq2CnHj_1uR46G0D-eIJR93c",
  authDomain: "budget-develop-2cb3c.firebaseapp.com",
  databaseURL: "https://budget-develop-2cb3c.firebaseio.com",
  projectId: "budget-develop-2cb3c",
  storageBucket: "budget-develop-2cb3c.appspot.com",
  messagingSenderId: "344892035551",
  appId: "1:344892035551:web:f9560ed3de45962033f46a"
}
initializeFirebaseApp(firebaseConfig);

//FONT AWESOME
//import { library } from '@fortawesome/fontawesome-svg-core';
//import icons from '../declarations/fontawesome.declarations';
//library.add(icons);