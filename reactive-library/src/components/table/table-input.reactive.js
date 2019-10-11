import React, { Component } from 'react';

export class InputTable extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value,
      error: ''
    }
  }

  onChange(evt) {
    if (evt.target.value) {
      this.setState({ value: evt.target.value, error: '' });
    } else {
      this.setState({ value: evt.target.value, error: 'error-field' });
    }
  }
  
  render() {
    const { type, name, required, placeholder } = this.props;
    const { value, error } = this.state;

		return (
			<td>
				<input
          className={ `form-control ${error}` }
					type={ type }
					name={ name }
					required={ required }
					placeholder={ placeholder }
          onChange={ (evt) => this.onChange(evt) }
          value={ value }
				/>
			</td>
		);
	}
}