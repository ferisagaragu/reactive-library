import React from 'react';
import { Route, Switch } from "reactive";
import TableView from '../../modules/table-reactive/table.view';
import TestView from '../../modules/test.view';
import TreeView from '../../modules/tree-reactive/tree.view';
import BootstrapView from '../../modules/bootstrap/bootstrap.view';
import FooterView from '../../modules/footer-reactive/footer.view';
import HeaderView from '../../modules/header-reactive/header.view';
import ModalView from '../../modules/modal-reactive/modal.view';

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
      {/*<Route component={ TestView } />*/}
    </Switch>
  );
}

export default Routing;