import * as React from 'react';
import { Button } from 'react-bootstrap';

interface Props {
  onClick: Function;
  variant: 'blue-green' | 'yellow-orange' |
           'ligthBlue-purple' | 'pink-orange' |
           'green-ligthGreen' | 'green-yellow' |
           'purple-darkPurple' | 'black-gray' |
           'ligthBlue-blue' | 'purple-pink' |
           'red-ligthRed';
}

interface State {}

export class GradientButtonReactive extends React.Component<Props, State> {
 
  private selectedColor(): string {
    const { variant } = this.props;

    switch(variant) {
      case 'blue-green': return 'color-1';
      case 'yellow-orange': return 'color-2';
      case 'ligthBlue-purple': return 'color-3';
      case 'pink-orange': return 'color-4';
      case 'green-ligthGreen': return 'color-5';
      case 'green-yellow': return 'color-6';
      case 'purple-darkPurple': return 'color-7';
      case 'black-gray': return 'color-8';
      case 'ligthBlue-blue': return 'color-9';
      case 'purple-pink': return 'color-10';
      case 'red-ligthRed': return 'color-11';
      default: return 'color-1';
    }
  }
  
  render() {
    const { onClick } = this.props;

    return (
      <Button
        className={ `btn-hover ${this.selectedColor()}` }
        onClick={ (evt: any) => onClick(evt) }
      >
        { this.props.children }
      </Button>
    );
  }
}