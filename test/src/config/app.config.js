import { createStore, applyMiddleware, compose, thunk } from 'reactive';
import { reducers, initState } from '../declarations/redux.declarations';

/*
import { library } from '@fortawesome/fontawesome-svg-core';
import icons from '../declarations/fontawesome.declarations';
*/

/*import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyB8lK-S0bBMq2CnHj_1uR46G0D-eIJR93c",
  authDomain: "budget-develop-2cb3c.firebaseapp.com",
  databaseURL: "https://budget-develop-2cb3c.firebaseio.com",
  projectId: "budget-develop-2cb3c",
  storageBucket: "budget-develop-2cb3c.appspot.com",
  messagingSenderId: "344892035551",
  appId: "1:344892035551:web:f9560ed3de45962033f46a"
}

firebase.initializeApp(firebaseConfig);
export default firebase;*/

//REDUX
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, initState, composeEnhancers(applyMiddleware(thunk)));

//FONT AWESOME
//library.add(icons);