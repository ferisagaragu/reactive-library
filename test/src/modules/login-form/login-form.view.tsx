import React, { Component } from 'react';
import { Row, Col, SyntaxHighlighter, tomorrow, LoginForm, UserData, LogoutButton } from 'reactive';
import PropsTableComponent from '../../shared/props-table/props-table.component';
import { exampleCode, props, exampleMode, propsLogout } from './props-login.data';

interface Props {}

interface State {
  loginData: UserData;
  registData: UserData;
}

class LoginFormView extends Component<Props,State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      loginData: new UserData({}),
      registData: new UserData({})
    }
  }

  render() {
    const { loginData, registData } = this.state;

    return (
      <Row>
        <Col md={ 12 }>
          <h2 className="mb-5">
            Login Form / Logout Button
          </h2>
        </Col>

        <Col md={ 12 }>
          <h4>
            Atributos
          </h4>
        </Col>
        
        <Col className="mb-5" md={ 12 }>
          <PropsTableComponent
            propsData={ props }
          />
        </Col>

        <Col className="mb-5" md={ 12 }>
          <PropsTableComponent
            propsData={ propsLogout }
          />
        </Col>

        <Col md={ 12 }>
          <h4>
            Modelos
          </h4>
        </Col>

        <Col className="mb-5" md={ 12 }>
          <code>UserData</code>
          <PropsTableComponent
            propsData={ exampleMode }
          />
        </Col>

        <Col md={ 12 }>
          <h4>
            Codígo
          </h4>
        </Col>

        <Col className="mb-5" md={ 8 }>
          <SyntaxHighlighter 
            language="tsx"
            style={ tomorrow } 
          > 
            { exampleCode }
          </SyntaxHighlighter>
        </Col>

        <Col className="mb-5" md={ 12 }>
          <h4 className="mb-3">
            Demo
          </h4>

          <LoginForm
            textLoginMessage="Bienvenido $(name)"
            textRegistMessage="Usuario registrado con $(email)"
            googleSingin
            useCookies
            defaultUserRol={ 1 }
            onLogin={ (userData: UserData) => this.setState({ loginData: userData }) }
            onRegist={ (userData: UserData) => this.setState({ registData: userData }) }
          />

          {/*<LogoutButton 
            className="btn btn-outline-info" 
          />*/}

          <div className="mt-5">
            <SyntaxHighlighter 
              language="json"
              style={ tomorrow } 
            > 
              { JSON.stringify(loginData) }
            </SyntaxHighlighter>
          </div>

          <div className="mt-2">
            <SyntaxHighlighter 
              language="json"
              style={ tomorrow } 
            > 
              { JSON.stringify(registData) }
            </SyntaxHighlighter>
          </div>
        </Col>
      </Row>
    );
  }
}

export default LoginFormView;