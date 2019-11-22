import React from 'react';
import { Route, Switch } from "reactive";
import TableView from '../../modules/table-reactive/table.view';
import TestView from '../../modules/test.view';
import TreeView from '../../modules/tree-reactive/tree.view';
import BootstrapView from '../../modules/bootstrap/bootstrap.view';
import FooterView from '../../modules/footer-reactive/footer.view';
import HeaderView from '../../modules/header-reactive/header.view';
import ModalView from '../../modules/modal-reactive/modal.view';
import BurgerMenuView from '../../modules/burger-menu/burger-menu.view';
import HomeView from '../../modules/home/home.view';
import NotFoundView from '../../modules/not-found/not-found.view';
import DatePicherView from '../../modules/date-picher/date-picher.view';
import FontAwesomeView from '../../modules/font-awesome/font-awesome.view';
import MomentView from '../../modules/moment/moment.view';
import IFrameView from '../../modules/i-frame/i-frame.view';
import ReactRouterView from '../../modules/react-router/react-router.view';
import ReduxView from '../../modules/redux/redux.view';
import SyntaxHighlighterView from '../../modules/syntax-highlighter/syntax-highlighter.view';
import CookiesJsView from '../../modules/cookies/cookies-js.view';
import ArrayView from '../../modules/array-reactive/array.view';
import FirebaseView from '../../modules/firebase/firebase.view';
import JSONView from '../../modules/json/json.view';
import KeyView from '../../modules/key/key.view';
import Sweetalert2View from '../../modules/sweetalert2/sweetalert2.view';
import CssView from '../../modules/css/css.view';
import LoginFormView from '../../modules/login-form/login-form.view';

const Routing = () => {
  return (
    <Switch>
      <Route path="/table/" exact component={ TableView } />
      <Route path="/tree/" exact component={ TreeView } />
      <Route path="/test/" exact component={ TestView } />
      <Route path="/bootstrap/" exact component={ BootstrapView } />
      <Route path="/footer/" exact component={ FooterView } />
      <Route path="/header/" exact component={ HeaderView } />
      <Route path="/modal/" exact component={ ModalView } />
      <Route path="/burger-menu/" exact component={ BurgerMenuView } />
      <Route path="/home/" exact component={ HomeView } />
      <Route path="/date-picker/" exact component={ DatePicherView } />
      <Route path="/font-awesome/" exact component={ FontAwesomeView } />
      <Route path="/moment/" exact component={ MomentView } />
      <Route path="/iframe/" exact component={ IFrameView } />
      <Route path="/react-router/" exact component={ ReactRouterView } />
      <Route path="/redux/" exact component={ ReduxView } />
      <Route path="/syntax-highlighter/" exact component={ SyntaxHighlighterView } />
      <Route path="/cookies-js/" exact component={ CookiesJsView } />
      <Route path="/array/" exact component={ ArrayView } />
      <Route path="/firebase/" exact component={ FirebaseView } />
      <Route path="/json/" exact component={ JSONView } />
      <Route path="/key/" exact component={ KeyView } />
      <Route path="/sweetalert2/" exact component={ Sweetalert2View } />
      <Route path="/r-css/" exact component={ CssView } />
      <Route path="/login-form/" exact component={ LoginFormView } />
      <Route path="/" exact component={ HomeView } />
      <Route component={ NotFoundView } />
    </Switch>
  );
}

export default Routing;