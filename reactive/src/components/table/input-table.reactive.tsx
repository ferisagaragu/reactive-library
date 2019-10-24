import * as React from 'react';

interface Props {
  className?: string; 
  type?: string;
  name?: string;
  required?: boolean;
  placeholder?: string;
  value?: string;
  error?: string;
}

interface State {
  value: string;
}

export class InputTableReactive extends React.Component<Props, State> {
  
  inputRef: any = null;

  constructor(props: Props) {
    super(props);

    this.state = {
      value: this.props.value ? this.props.value : ''
    }

    this.inputRef = React.createRef();
  }

  private onChange(evt: any): void {
    const { required } = this.props;

    if (evt.target.value) {
      this.setState({ value: evt.target.value });
      if (required) {
        this.inputRef.current.classList.remove('error');
      }
    } else {
      this.setState({ value: evt.target.value });
      if (required) {
        this.inputRef.current.classList.add('error');
      }
    }
  }
  
  render() {
    const { type, name, required, placeholder } = this.props;
    const { value } = this.state;

		return (
      <input
        ref={ this.inputRef }
        id={ name }
        className={ `form-control` }
        type={ type }
        name={ name }
        placeholder={ placeholder }
        onChange={ (evt) => this.onChange(evt) }
        value={ value }
        required={ required }
      />
		);
	}
}