import React, { Component } from 'react';
import { connect, Header, Footer, Container, Row, Col, Link, BugReport, DropdownButton, LogoutButton } from 'reactive';
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
          right={
            <DropdownButton 
              className={ `reactive-user-button mt-1` }
              id="reactive-user-button"
              title={ <img className="rounded-circle" src="https://lh3.googleusercontent.com/--kQk-D8sBIs/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rcnlN07JosEDqPL0-zr5JgwT5xHfw.CMID/s32-c/photo.jpg" /> }
            >
              <LogoutButton className="dropdown-item" />
            </DropdownButton>
          }
          menuData={ navMenu }
        />
 
        <Container className="r-app-container">
          <Routing />
        </Container>

        <Footer 
          className="r-gradient"
          left={
            <Row>
              <Col className="p-3 text-center" xs={ 6 } sm={ 6 } md={ 6 }>
                <NeuroBrainIcon 
                  className={ `${ 
                      windowSize === 'xs' || windowSize === 'sm' ?
                        'r-icon-32'
                      :
                        'r-icon-42'
                    }` 
                  } 
                />

                {
                  !(windowSize === 'xs' || windowSize === 'sm') && 
                    <h4 className="m-3">
                      NeuroBrain
                    </h4>
                }
              </Col>
            </Row>
          }
          center={
            <Row>
              <Col className="p-3"  xs={ 6 } sm={ 6 } md={ 6 }>
                <a className="r-no-link" href="https://console.firebase.google.com/">
                  <FirebaseIcon 
                    className={ `${ 
                        windowSize === 'xs' || windowSize === 'sm' ?
                          'r-icon-32'
                        :
                          'r-icon-42'
                      }` 
                    }  
                  />
                  {
                    !(windowSize === 'xs' || windowSize === 'sm') && 
                      <h4 className="m-3">
                        Firebase
                      </h4>
                  }
                </a>
              </Col>

              <Col className="p-3" xs={ 6 } sm={ 6 } md={ 6 }>
                <a className="r-no-link" href="https://github.com/ferisagaragu/reactive-library">
                  <GitHubIcon 
                    className={ `${ 
                        windowSize === 'xs' || windowSize === 'sm' ?
                          'r-icon-32'
                        :
                          'r-icon-42'
                      }` 
                    }   
                  />
                  {
                    !(windowSize === 'xs' || windowSize === 'sm') && 
                      <h4 className="m-3">
                        GitHub Repo
                      </h4>
                  }
                </a>
              </Col>
            </Row>
          }
          right={
            <Row>
              <Col 
                className={ `text-right ${!(windowSize === 'xs' || windowSize === 'sm') && 'mt-3'} p-3` } 
                xs={ 12 }
                sm={ 12 } 
                md={ 12 }
              >
                <BugReport
                  className={ `${!(windowSize === 'xs' || windowSize === 'sm') && 'mt-4 ml-4'}` }
                  classBug={ windowSize === 'xs' || windowSize === 'sm' ? 'bug-report-mini mr-1' : '' }
                  classReport={ windowSize === 'xs' || windowSize === 'sm' ? 'bug-report-mini' : '' }
                  buttonSize={ windowSize === 'xs' || windowSize === 'sm' ? 'sm' : undefined }
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