import React, { Component } from 'react';

interface Props { }

interface State { }

class DataDatComponent extends Component<Props,State> {

  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <>
        data-dat.component rendered
      </>
    );
  }

}

export default DataDatComponent;