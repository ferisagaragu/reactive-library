import './config/app.config';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginFormReactive from './components/login-form/login-form.reactive';

//============================REACTIVE============================
//+components
export { RenderTableReactive as Table } from './components/table/render-table.reactive';
export { ModalReactive as Modal } from './components/modal/modal.reactive';
export { HeaderReactive as Header } from './components/header/header.reactive';
export { FooterReactive as Footer } from './components/footer/footer.reactive';
export { TreeReactive as Tree } from './components/tree/tree.reactive';
export { GradientButtonReactive as GradientButton } from './components/gradient-button/gradient-button.reactive';
export const LoginForm = LoginFormReactive;

//+util
export { 
  foreachJSONReactive as foreachJSON, 
  oderJSONByReactive as oderJSONBy, 
  convertJSONToArrayReactive as convertJSONToArray, 
  removeInJSONArrayReactive as removeInJSONArray, 
  replaceInJSONArrayReactive as replaceInJSONArray, 
  isJSONReactive as isJSON
} from './components/util/json.reactive'; 
export { 
  splitArrayReactive as splitArray,
  removeArrayByMatchReactive as removeArrayByMatch 
} from './components/util/array.reactive';
export { 
  findByTypeReactive as findByType
} from './components/util/react-util.reactive';
//========================================================

//============================MODIFY======================
/*
  +uniqid ->
    npm i uniqid 
    npm i @types/uniqid 
    https://www.npmjs.com/package/uniqid
*/
export { keyReactive as key } from './components/key/key.reactive';

/*
  +sweetalert2 ->
    npm i uniqid 
    npm i @types/uniqid 
    https://www.npmjs.com/package/uniqid
*/
export { 
  toastReactive as toast, 
  alertReactive as alert, 
  alertQuestionReactive as alertQuestion 
} from './components/swal/swal.reactive';

/*
  +firebase ->
    npm i firebase
    https://www.npmjs.com/package/firebase
*/
export { 
  FirebaseReactive as Firebase, 
  initializeFirebaseAppReactive as initializeFirebaseApp 
} from './components/firebase/firebase.reactive';
//========================================================

//==========================EXPORTS=======================
/*
  +redux ->
    npm i redux 
    npm i react-redux 
    npm i redux-thunk 
    npm i redux-form 
    https://redux-form.com/6.1.1/examples/
    https://redux.js.org/basics/usage-with-react
*/
export {
  createStore,
  applyMiddleware,
  compose,
  combineReducers,
  Provider,
  connect,
  thunk,
  reducer
} from './exports/redux.export'

/*
  +router ->
    yarn add react-router-dom 
    yarn @types/react-router-dom 
    https://reacttraining.com/react-router/web/guides/quick-start
*/
export { 
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Link 
} from 'react-router-dom';

/*
  +bootstrap ->
    npm i react-bootstrap 
    npm i bootstrap 
    https://react-bootstrap.github.io/getting-started/introduction
*/
export {
  Alert,
  Accordion,
  Badge,
  Breadcrumb,
  Button,
  ButtonGroup,
  Card,
  Carousel,
  Dropdown,
  Form,
  InputGroup,
  Image,
  Figure,
  Jumbotron,
  ListGroup,
  Modal as ModalBootstrap,
  Nav,
  Navbar,
  Overlay,
  Pagination,
  Popover,
  ProgressBar,
  Spinner,
  Table as TableBootstrap,
  Tabs,
  Tooltip,
  Toast,
  Container,
  Row,
  Col
} from 'react-bootstrap';

/*
  +fortawesome ->
  npm i @fortawesome/fontawesome-svg-core 
  npm i @fortawesome/free-solid-svg-icons 
  npm i @fortawesome/react-fontawesome 
  https://fontawesome.com/v5.4.1/how-to-use/on-the-web/using-with/react
*/
export { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export { library as awesomeLibrary } from '@fortawesome/fontawesome-svg-core';
export { awesomeIconsReactive as awesomeIcons } from './declarations/fontawesome.declarations';

/*
  +burger-menu ->
    npm i react-burger-menu
    https://github.com/negomi/react-burger-menu
*/
export {
  MenuSlide,
  MenuStack,
  MenuElastic,	
  MenuBubble,
  MenuPush,
  MenuPushRotate,
  MenuScaleDown,
  MenuScaleRotate,
  MenuFallDown,
  MenuReveal
} from './exports/burger-menu.export';

/*
  +react-syntax-highlighter ->
    npm i react-syntax-highlighter
    npm i @types/react-syntax-highlighter
    https://www.npmjs.com/package/react-syntax-highlighter
*/
export { SyntaxHighlighter } from './exports/syntaxhighlighter.export';
export { prism, tomorrow, atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

/*
  +react-iframe ->
    npm i react-iframe
    https://www.npmjs.com/package/react-iframe
*/
export { iFrameReactive as Iframe } from './exports/iframe.export';
//========================================================

//==========================TYPES=========================
export { HeaderTable } from './exports/model/header-table.model';
export { TreeElement } from './exports/model/tree-element.model';
export { BurgerElement } from './exports/model/burger-element.model';
export { BurgerSubElement } from './exports/model/burger-sub-element.model';
//========================================================