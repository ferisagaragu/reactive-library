import React, { Component } from 'react';
import { ReactComponent as ReactiveLogo } from '../styles/svg/reactive.svg';
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

class App extends Component<any, any> {
  render() {
    return (
      <>
        <Header
          className="r-gradient"
          left={
            <Link title="Inicio" className="no-link" to="/home">
              <Row>
                <Col className="mt-1" md={ 1 }>
                  <ReactiveLogo 
                    className="reactive-log r-spin" 
                  /> 
                </Col>

                <Col md={ 10 }>
                  <h3 className="ml-3">
                    Reactive
                  </h3>
                </Col>
              </Row>
            </Link>
          }
          menuData={ navMenu }
        />
 
        <Container className="r-app-container">
          <Routing />
        </Container>

        <Footer 
          className="r-gradient"
          left={
            <h3 className="m-3">
              NeuroBrain
            </h3>
          }
          right={
            <BugReport
              className="mt-3"
              adminRole={ true }
              titleAlter="Resolver el problema"
              textAlter="¿Estas seguro de que quieres marcar el problema como resuelto?"
            />
          }
        />
      </>
    );
  }
}

const mapStateToProps = (state: any) => ({
  userData: state.userData
});

const mapDispatchToProps = (dispatch: Function) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);