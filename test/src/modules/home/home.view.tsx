import React, { Component } from 'react';
import { Row, Space, Col } from 'reactive';
import { ReactComponent as GitHubIcon } from '../../styles/svg/github-logo.svg';

interface Props {}

interface State {
  isClose: boolean;
}

class HomeView extends Component<Props,State> {
  render() {
    return (
      <Row>
        <h2>
          Documentacion Reactive
        </h2>

        <Col md={ 12 }>
          <a href="https://github.com/ferisagaragu/reactive-library">
            <GitHubIcon className="git-icon"/>
            <Space />
            Repo en GitHub
          </a>
        </Col>
      </Row>
    );
  }
}

export default HomeView;