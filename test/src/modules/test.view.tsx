import React, { Component } from 'react';
import { LoginForm, GradientButton } from 'reactive';

class TestView extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <GradientButton
          onClick={ () => console.log('Hola amigo') }
          variant="green-yellow"
        >
          Hola primo
        </GradientButton>

        <LoginForm
          submitActions={ (formData: any) => console.log(formData) }
          cancel={ () => {} }
          showButtons={ false }
        />
      </div>
    );
  }
}

export default TestView;