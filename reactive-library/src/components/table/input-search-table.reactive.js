import React, { Component } from 'react';

export class InputSearchTable extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value
    }
  }
  
  render() {
    const { className, placeholder, onChange } = this.props;

		return (
      <input
        className={ `${className} form-control` }
        type="text"
        placeholder={ placeholder }
        onChange={ (evt) => onChange(evt.target.value) }
      />
		);
	}
}