import React, { Component } from 'react';
import { LoginForm } from 'reactive';

class TestView extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
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