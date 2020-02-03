import * as React from 'react';
import { Button } from 'react-bootstrap';

interface Props {
  onClick?: Function;
  variant: 'blue-green' | 'yellow-orange' |
           'lightBlue-purple' | 'pink-orange' |
           'green-lightGreen' | 'green-yellow' |
           'purple-darkPurple' | 'black-gray' |
           'lightBlue-blue' | 'purple-pink' |
           'red-lightRed' | 'lightGray-gray';
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  className?: string;
}

interface State {}

export class GradientButtonReactive extends React.Component<Props, State> {
  render() {
    const { onClick, variant, type, disabled, className } = this.props;

    return (
      <Button
        className={ `btn-hover ${variant} ${className}` }
        onClick={ (evt: any) => onClick && onClick(evt) }
        type={ type }
        disabled={ disabled }
      >
        { this.props.children }
      </Button>
    );
  }
}