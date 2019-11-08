import * as React from 'react';

interface Props {
  spaces?: number;
}

interface State {}

export class SpaceReactive extends React.Component<Props, State> {
  
  private renderSpaces(): Array<React.ReactElement> {
    const { spaces } = this.props;
    const out: Array<React.ReactElement> = [];

    if (spaces) {
      for (let index = 0; index < spaces; index++) {
        out.push(<>&nbsp;</>);
      }
      return out;
    }

    return out;
  }
  
  render () {
    const { spaces } = this.props;
    return (
      <>
        {
          spaces ?
            this.renderSpaces()
          :
            <>&nbsp;</>
        }
      </>
    );
  }
}