import React, { Component } from 'react';

interface Props { }

interface State { }

class ComComponent extends Component<Props,State> {

  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <>
        com.component rendered
      </>
    );
  }

}

export default ComComponent;