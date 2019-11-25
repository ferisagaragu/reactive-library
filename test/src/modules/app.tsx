import React, { Component } from 'react';
import { connect, Container, LoginForm, UserData } from 'reactive';
import Routing from '../core/routes/routing.routes';
import { setUserData } from '../core/actions/user-data.actions';
import HeaderView from './layout/header/header.view';
import FooterView from './layout/footer/footer.view';

class App extends Component<any, any> {

  render() {
    const { setUserData, userData } = this.props;

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
              <HeaderView />
      
              <Container className="r-app-container">
                <Routing />
              </Container>

              <FooterView />
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