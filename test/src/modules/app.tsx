import React, { Component } from 'react';
import { connect, Header, Footer, Container, Row, Col, Link, BugReport, LogoutButton, LoginForm, UserData, LogoutItem, Space, Badge } from 'reactive';
import Routing from '../core/routes/routing.routes';
import { navMenu } from '../declarations/nav-menu.declarations';
import { ReactComponent as GitHubIcon } from '../styles/svg/github-logo.svg';
import { ReactComponent as FirebaseIcon } from '../styles/svg/firebase-logo.svg';
import { ReactComponent as ReactiveLogo } from '../styles/svg/reactive.svg';
import { ReactComponent as NeuroBrainIcon } from '../styles/svg/neuron.svg';
import { setUserData } from '../core/actions/user-data.actions';

class App extends Component<any, any> {

  render() {
    const { windowSize, setUserData, userData } = this.props;

    return (
      <>
        {
          !userData ? 
            <Container>
              <LoginForm
                className="mt-5"
                textLoginMessage="Bienvenido $(name)"
                textRegistMessage="Usuario registrado con $(email)"
                useCookies
                regist={ false }
                recover={ false }
                defaultUserRol={ 1 }
                onLogin={ (userData: UserData) => setUserData(userData) }
                onRegist={ () => {} }
              />
            </Container>
          :
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
                  <LogoutButton 
                    className="mt-1"
                    src={ userData.photoURL }
                    title={ `${userData.displayName}` }
                    onLogOut={ () => setUserData(null) } 
                  >
                    <LogoutItem onClick={ () => {} }>
                      { `${userData.name} ${userData.lastName}` }
                      {
                        userData.role === 1 &&
                          <>
                            <Space />
                            <Badge variant="info">
                              Admin
                            </Badge>
                          </>
                      }
                    </LogoutItem>
                  </LogoutButton>
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
                        adminRole={ userData.role === 1 }
                        titleAlter="Resolver el problema"
                        textAlter="¿Estas seguro de que quieres marcar el problema como resuelto?"
                      />
                    </Col>
                  </Row>
                }
              />
            </>
        
        }
      </>
    );
  }
}

const mapStateToProps = (state: any) => ({
  userData: state.userData,
  windowSize: state.windowSize
});

const mapDispatchToProps = (dispatch: Function) => ({
  setUserData: (userData: UserData) => dispatch(setUserData(userData))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);