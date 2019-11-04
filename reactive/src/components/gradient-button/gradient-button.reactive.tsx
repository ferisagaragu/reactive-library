import * as React from 'react';
import { Button } from 'react-bootstrap';

interface Props {
  onClick?: Function;
  variant: 'blue-green' | 'yellow-orange' |
           'ligthBlue-purple' | 'pink-orange' |
           'green-ligthGreen' | 'green-yellow' |
           'purple-darkPurple' | 'black-gray' |
           'ligthBlue-blue' | 'purple-pink' |
           'red-ligthRed' | 'ligthGray-gray';
}

interface State {}

export class GradientButtonReactive extends React.Component<Props, State> {
  render() {
    const { onClick, variant } = this.props;

    return (
      <Button
        className={ `btn-hover ${variant}` }
        onClick={ (evt: any) => onClick && onClick(evt) }
      >
        { this.props.children }
      </Button>
    );
  }
}