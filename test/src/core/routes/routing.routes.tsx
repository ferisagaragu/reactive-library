import React from 'react';
import { Route, Switch } from "reactive";
import TableView from '../../modules/table-reactive/table.view';
import TestView from '../../modules/test.view';
import TreeView from '../../modules/tree-reactive/tree.view';

const Routing = () => {
  return (
    <Switch>
      <Route path="/table/" exact component={ TableView } />
      <Route path="/tree/" exact component={ TreeView } />
      <Route path="/test/" exact component={ TestView } />
      {/*<Route path="/about/" exact component={ AboutView } />
      <Route path="/material/" exact component={ MaterialView } />
      <Route path="/experimental/" exact component={ Experimental } />
      <Route component={ TestView } />*/}
    </Switch>
  );
}

export default Routing;