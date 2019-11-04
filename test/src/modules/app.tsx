import React, { Component } from 'react';
import { ReactComponent as ReactiveLogo } from '../styles/svg/reactive.svg';
import {
  connect, 
  Header, 
  Footer,
  Container,
  Row,
  Col
} from 'reactive';
import Routing from '../core/routes/routing.routes';
import { navMenu } from '../declarations/nav-menu.declarations';

class App extends Component<any, any> {
  render() {
    return (
      <>
        <Header
          left={
            <Row>
              <Col className="mt-1" md={ 1 }>
                <ReactiveLogo 
                  className="reactive-log" 
                /> 
              </Col>

              <Col md={ 10 }>
                <h3 className="ml-3">
                  Reactive
                </h3>
              </Col>
            </Row>
          }
          menuData={ navMenu }
        />
 
        <Container className="app-container">
          <Routing />
        </Container>

        <Footer 
          left={
            <h3 className="m-3">
              NeuroBrain
            </h3>
          }
        />
      </>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    userData: state.userData
  }
};

const mapDispatchToProps = (dispatch: Function) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);