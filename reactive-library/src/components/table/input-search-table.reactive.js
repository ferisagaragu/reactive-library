import React, { Component } from 'react';

export class InputSearchTable extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value
    }
  }

  onChange(evt) {
    this.setState({ value: evt.target.value });
  }
  
  render() {
    const { className, type, name, placeholder } = this.props;
    const { value } = this.state;

		return (
      <input
        className={ `${className} form-control` }
        type={ type }
        name={ name }
        placeholder={ placeholder }
        onChange={ (evt) => this.onChange(evt) }
        value={ value }
      />
		);
	}
}