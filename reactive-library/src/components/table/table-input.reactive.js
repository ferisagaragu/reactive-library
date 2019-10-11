import React, { Component } from 'react';

export class InputTable extends Component {
	render() {
		const { type, name, required, placeholder, _handleChange } = this.props;

		return (
			<div>
				<input 
					type={ type }
					name={ name }
					required={ required }
					placeholder={ placeholder }
					onChange={ _handleChange }
				/>
			</div>
		);
	}
}