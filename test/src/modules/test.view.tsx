import React, { Component } from 'react';
import { LoginForm, Col, GradientButton, BugReport } from 'reactive';

class TestView extends Component {
  render() {
    return (
      <div>
        <Col md={ 8 }>
          <LoginForm
            submitActions={ (formData: any) => console.log(formData) }
            cancel={ () => console.log('Cancelo') }
            showButtons={ true }
            
            icon={ <img alt="principal icon" src="https://img.icons8.com/pastel-glyph/2x/login-rounded-right.png" width="64" /> }

            textCancel="Registrar"
            classCancel="btn-hover purple-darkPurple"

            textSubmit="Entrar"
            classSubmit="btn-hover pink-orange"

            passwordLost={ <a href="/hola">¿Olvidaste tu contraseña?</a> }
          >
            <GradientButton variant="ligthBlue-purple">
              Iniciar sesión con Google
            </GradientButton>
          </LoginForm>

          <BugReport></BugReport>
        </Col>
      </div>
    );
  }
}

export default TestView;