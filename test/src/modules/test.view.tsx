import React, { Component } from 'react';

class TestView extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        Soy un test
      </div>
    );
  }
}

export default TestView;