import React, { Component } from 'react';
import { Row } from 'reactive';

interface Props {}

interface State {
  isClose: boolean;
}

class HomeView extends Component<Props,State> {
  render() {
    return (
      <Row>
        <h2>Documentacion Reactive</h2>
        <code>v 0.1</code>
      </Row>
    );
  }
}

export default HomeView;