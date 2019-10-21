import * as React from 'react';

interface Props {
  className?: string; 
  type?: string;
  name?: string;
  required?: string;
  placeholder?: string;
  value?: string;
  error?: string;
}

interface State {
  value: string;
  error: string;
}

export class InputTableReactive extends React.Component<Props, State> {
  
  constructor(props: Props) {
    super(props);

    this.state = {
      value: this.props.value ? this.props.value : '',
      error: this.props.error ? 'error-field' : ''
    }
  }

  onChange(evt: any) {
    if (evt.target.value) {
      this.setState({ value: evt.target.value, error: '' });
    } else {
      this.setState({ value: evt.target.value, error: 'error-field' });
    }
  }
  
  render() {
    const { className, type, name, required, placeholder } = this.props;
    const { value, error } = this.state;

		return (
      <input
        className={ `${className} form-control ${required ? error : ''}` }
        type={ type }
        name={ name }
        placeholder={ placeholder }
        onChange={ (evt) => this.onChange(evt) }
        value={ value }
      />
		);
	}
}