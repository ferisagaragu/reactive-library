import React, { Component } from 'react';
import { connect } from 'reactive';

interface Props { }

interface State { }

class ExampleView extends Component<Props, State> {

  componentDidMount() { }

  render() {
    return (
      <>
        ExampleView rendered
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

export default connect(mapStateToProps, mapDispatchToProps)(ExampleView);