import React, { Component } from 'react';
import { connect } from 'reactive';
import ComComponent from './com/com.component';

interface Props { }

interface State { }

class DataView extends Component<Props, State> {

  componentDidMount() { }

  render() {
    return (
      <>
        <ComComponent /> 
      </>
    );
  }
}

const mapStateToProps = (state: any) => ({
  //exampleData: state.exampleData
});

const mapDispatchToProps = (dispatch: Function) => ({
  //setExampleData: () => dispatch(setExampleData(example))
});

export default connect(mapStateToProps, mapDispatchToProps)(DataView);