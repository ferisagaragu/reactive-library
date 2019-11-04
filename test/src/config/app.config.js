import { createStore, applyMiddleware, compose, thunk } from 'reactive';
import { reducers, initState } from '../declarations/redux.declarations';
import { initializeFirebaseApp, awesomeLibrary } from 'reactive';
import icons from '../declarations/fontawesome.declarations';

//REDUX
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, initState, composeEnhancers(applyMiddleware(thunk)));

//FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyBQVY0NNn5hXqy3kK5sOQPtUi3k7OZ5KH0",
  authDomain: "test-reactive.firebaseapp.com",
  databaseURL: "https://test-reactive.firebaseio.com",
  projectId: "test-reactive",
  storageBucket: "test-reactive.appspot.com",
  messagingSenderId: "827247971563",
  appId: "1:827247971563:web:0ca222f356e5e502f2c2ae"
}
initializeFirebaseApp(firebaseConfig);

//FONT AWESOME
awesomeLibrary.add(icons);