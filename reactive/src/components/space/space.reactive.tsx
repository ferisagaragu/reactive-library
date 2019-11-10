import * as React from 'react';
import { keyReactive } from '../key/key.reactive';

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
        out.push(<i key={ keyReactive() }>&nbsp;</i>);
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