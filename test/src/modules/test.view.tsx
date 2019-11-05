import React, { Component } from 'react';
import { LoginForm, Col, GradientButton, BugReport, Button } from 'reactive';

class TestView extends Component {
  render() {
    return (
      <div>
        <Col md={ 8 }>
          <LoginForm
            submitActions={ (formData: any) => console.log(formData) }
            cancel={ () => console.log('Cancelo') }
            showButtons={ true }
            
            icon={ <img alt="principal icon" src="https://icon-library.net/images/animated-icon-gif/animated-icon-gif-13.jpg" width="64" /> }

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

          <BugReport>Tengo un problema</BugReport>
          <Button>Hola</Button>
        </Col>
      </div>
    );
  }
}

export default TestView;