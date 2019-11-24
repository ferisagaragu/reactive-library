import React, { Component } from 'react';
import {
  connect, 
  Header, 
  Footer,
  Container,
  Row,
  Col,
  Link,
  BugReport
} from 'reactive';
import Routing from '../core/routes/routing.routes';
import { navMenu } from '../declarations/nav-menu.declarations';
import { ReactComponent as GitHubIcon } from '../styles/svg/github-logo.svg';
import { ReactComponent as FirebaseIcon } from '../styles/svg/firebase-logo.svg';
import { ReactComponent as ReactiveLogo } from '../styles/svg/reactive.svg';
import { ReactComponent as NeuroBrainIcon } from '../styles/svg/neuron.svg';

class App extends Component<any, any> {

  render() {
    const { windowSize } = this.props;

    return (
      <>
        <Header
          className="r-gradient"
          left={
            <Row>
              <Link title="Inicio" className="r-no-link ml-3" to="/home">
                <Row>
                  <Col className="mt-1" xs={ 1 } md={ 1 }>
                    <ReactiveLogo 
                      className="reactive-log r-spin" 
                    /> 
                  </Col>

                  <Col xs={ 3 } md={ 3 }>
                    <h3 className="ml-3">
                      Reactive
                    </h3>
                  </Col>
                </Row>
              </Link>

              {
                windowSize !== 'sm' && windowSize !== 'xs' &&
                  <Col md={ 3 }>
                    <code>
                      v 0.1 - beta
                    </code>
                  </Col>
              }
            </Row>
          }
          menuData={ navMenu }
        />
 
        <Container className="r-app-container">
          <Routing />
        </Container>

        <Footer 
          className="r-gradient"
          left={
            <Row className="mt-4 ml-1">
              <Col md={ 1 }>
                <NeuroBrainIcon style={{ width: '64px', height: '64px', padding: '10px' }}/>
              </Col>

              <Col className="ml-3" md={ 2 }>
                <h3 className="m-3">
                  NeuroBrain
                </h3>
              </Col>
            </Row>
          }
          center={
            <Row>
              <Col md={ 6 }>
                <a className="r-no-link" href="https://console.firebase.google.com/">
                  <FirebaseIcon style={{ width: '64px', height: '64px', padding: '10px' }} />
                  <h4>Firebase</h4>
                </a>
              </Col>

              <Col md={ 6 }>
                <a className="r-no-link" href="https://github.com/ferisagaragu/reactive-library">
                  <GitHubIcon style={{ fill: '#fff', width: '64px', height: '64px', padding: '10px' }} />
                  <h4>GitHub Repo</h4>
                </a>
              </Col>
            </Row>
          }
          right={
            <Row>
              <Col className="text-right mt-3">
                <BugReport
                  className="mt-4 ml-4"
                  adminRole={ true }
                  titleAlter="Resolver el problema"
                  textAlter="¿Estas seguro de que quieres marcar el problema como resuelto?"
                />
              </Col>
            </Row>
          }
        />
      </>
    );
  }
}

const mapStateToProps = (state: any) => ({
  userData: state.userData,
  windowSize: state.windowSize
});

export default connect(mapStateToProps, null)(App);