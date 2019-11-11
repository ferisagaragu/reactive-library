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
      
      <Route path="/" exact component={ HomeView } />
      <Route component={ NotFoundView } />
    </Switch>
  );
}

export default Routing;