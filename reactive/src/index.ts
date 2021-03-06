import './config/app.config';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import 'animate.css';

//============================REACTIVE============================
//+components
export { RenderTableReactive as Table } from './components/table/render-table.reactive';
export { ModalReactive as Modal } from './components/modal/modal.reactive';
export { SingleModalReactive as SingleModal } from './components/modal/single-modal.reactive';
export { Header } from './components/header/header.view';
export { FooterReactive as Footer } from './components/footer/footer.reactive';
export { TreeReactive as Tree } from './components/tree/tree.reactive';
export { GradientButtonReactive as GradientButton } from './components/gradient-button/gradient-button.reactive';
export { RenderLoginReactive as LoginForm } from './components/login-form/render-login.reactive';
export { LogoutButtonReactive as LogoutButton } from './components/logout-button/logout-button.view';
export { LogoutItemReactive as LogoutItem } from './components/logout-button/logout-item.reactive';
export { SpaceReactive as Space } from './components/space/space.reactive';
export { BugReportView as BugReport } from './components/bug-report/bug-report.view';
export { FileFieldReactive as FileField } from './components/react-field/file-field.reactive';
export { CheckBoxReactive as CheckBox } from './components/react-field/checkbox.reactive';
export { MaskFieldReactive as MaskField } from './components/react-field/mask-field.reactive';
export { 
  SingleSelectReactive as SingleSelect,
  MultiSelectReactive as MultiSelect 
} from './components/select/select.reactive';
export { UserButtonReactive as UserButton } from './components/user-button/user-button.view';
export { UserOptionItemReactive as UserOptionItem } from './components/user-button/user-option-item.reactive';

//+redux-form
export { RenderTextFieldReactive as RenderTextField } from './components/redux-form/redux-render-text-field.reactive';
export { RenderSingleSelectReactive as RenderSingleSelect } from './components/redux-form/redux-render-single-select.reactive';
export { RenderTextAreaReactive as RenderTextArea } from './components/redux-form/redux-render-text-area.reactive';
export { RenderMaskFieldReactive as RenderMaskField } from './components/redux-form/redux-render-mask-field.reactive';
export { RenderFileFieldReactive as RenderFileField } from './components/redux-form/redux-render-file-field.reactive';
export { RenderMultiSelectReactive as RenderMultiSelect } from './components/redux-form/redux-render-multi-select.reactive';

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
export { toBase64Reactive as toBase64 } from './components/util/base64.reactive';
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
  alertQuestionReactive as alertQuestion,
  alertLoading,
  closeAlertLoading,
  alertInput
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
  reducer,
  change,
  untouch,
  reduxForm,
  Field
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
  Link,
  useHistory
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
  DropdownButton,
  Container,
  Row,
  Col,
  OverlayTrigger
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
export { 
  SyntaxHighlighter, 
  javascriptReactive as javascript,
  jsxReactive as jsx,
  tsxReactive as tsx,
  highlight,
  jsonscriptReactive as jsonscript,
  typescriptReactive as typescript 
} from './exports/syntaxhighlighter.export';
export { prism, tomorrow, atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

/*
  +react-iframe ->
    npm i react-iframe
    https://www.npmjs.com/package/react-iframe
*/
export { iFrameReactive as Iframe } from './exports/iframe.export';

/*
  + react-datepicker -> 
    npm i react-datepicker
    https://www.npmjs.com/package/react-datepicker
*/
export { 
  DatePickerReactive as DatePicker,
  registerLocaleReactive as registerLocale,
  esReactive as es
} from './exports/datepicker.export';

/*
  +moment-js ->
    npm i moment-js
    https://momentjs.com/
*/
export { moment } from './exports/moment.export';

/*
*/
//export { EditorState, Editor } from './exports/draft-wysiwyg.export';

/*
  +js-cookie ->
    npm i js-cookie
    https://www.npmjs.com/package/js-cookie
*/
export { Cookies } from './exports/cookies.export';

/*
  +inputmask ->
    npm i inputmask
    https://www.npmjs.com/package/inputmask
*/
export { Inputmask } from './exports/inputmask.export';

/*
  +cryptr
    npm i cryptr
    https://www.npmjs.com/package/cryptr
*/
export { Cryptr } from './exports/cryptr.export';

/*
  +@tinymce/tinymce-react
  
*/
export const Editor = require('@tinymce/tinymce-react').Editor;


/*
  +axios
  npm i axios
  https://www.npmjs.com/package/axios
*/
export { axios, AxiosResponse, AxiosError } from './exports/axios.export';

/* 
  test falta pasar esto a exports
*/
export const Adapter = require('enzyme-adapter-react-16');
export const Enzyme: { 
  mount: Function;
  configure: any;
} = require('enzyme');
Enzyme.configure({ adapter: new Adapter() });

export interface Wrapper {
  find: Function;
  simulate: Function;
  unmount: Function;
}



export { ReactDOM } from './exports/react-dom.export';
//========================================================

//==========================TYPES=========================
export { HeaderTable } from './exports/model/header-table.model';
export { TreeElement } from './exports/model/tree-element.model';
export { BurgerElement } from './exports/model/burger-element.model';
export { BurgerSubElement } from './exports/model/burger-sub-element.model';
export { SelectElement } from './exports/model/select-element.model';
export { UserData } from './exports/model/user-data.model';
export { Action } from './exports/interface/action.export';
//========================================================

//==========================REDUCERS======================
export { windowSize } from './components/reducers/window-resize.reducer';
export { onWindowResize } from './components/reducers/window-resize.actions';
//========================================================