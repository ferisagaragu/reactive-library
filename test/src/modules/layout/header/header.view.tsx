import React, { Component } from 'react';
import { Header, Row, Link, Col, connect, UserData, LogoutButton, Space, Badge, LogoutItem } from 'reactive';
import { ReactComponent as ReactiveLogo } from '../../../styles/svg/reactive.svg';
import { navMenu } from '../../../declarations/nav-menu.declarations';
import { setUserData } from '../../../core/actions/user-data.actions';

interface Props {
  windowSize: string;
  userData: UserData;
  setUserData: Function;
}

interface State {}

class HeaderView extends Component<Props, State> {
  render() {
    const { windowSize, userData, setUserData } = this.props;

    return (
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

export default connect(mapStateToProps, mapDispatchToProps)(HeaderView);