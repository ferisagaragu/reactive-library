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
      <Route path="/" exact component={ HomeView } />
      <Route component={ NotFoundView } />
    </Switch>
  );
}

export default Routing;