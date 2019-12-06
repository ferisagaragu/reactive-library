import * as React from 'react';
import { Inputmask } from '../../exports/inputmask.export';

interface Props {
  className?: string;
  value?: string;
  mask?: string;
  placeholder?: string;
  onInit?: Function;
  onChange?: Function;
}

interface State {
  renderMask: string;
}

export class MaskFieldReactive extends React.Component<Props,State> {
  
  inputRef: any = null;

  constructor(props: Props) {
    super(props);
    const { value } = this.props;

    this.state = {
      renderMask: value ? value : ''
    }

    this.inputRef = React.createRef();
  }

  componentDidMount() {
    const { onInit } = this.props;
    const { mask } = this.props;
    const im = new Inputmask(mask);
    im.mask(this.inputRef.current);
    onInit && onInit(this.inputRef.current);
  }

  private onChange(target: any): void {
    const { onChange } = this.props;
    this.setState({ renderMask: target.value });
    onChange && onChange(target.value, target);
  }
  
  render() {
    const { placeholder, className } = this.props;
    const { renderMask } = this.state;

    return (
      <>
        <input
          className={ `form-control ${className}` }
          ref={ this.inputRef } 
          type="text" 
          onChange={ (evt) => this.onChange(evt.target) } 
          value={ renderMask }
          placeholder={ placeholder } 
        />
      </>
    )
  }
}