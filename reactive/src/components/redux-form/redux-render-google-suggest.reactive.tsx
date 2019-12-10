import * as React from 'react';

const ReactGoogleMapLoader = require('react-google-maps-loader').default;
const ReactGooglePlacesSuggest = require("react-google-places-suggest").default;
const MY_API_KEY = "AIzaSyCGfbafYQgjSAXzZ7ikqOwo7GBtmWZ0hjU";
 
interface Props {
	input: any;
	label: string;
	className: string;
	textNoResults: string;
	meta: any;
	disabled: boolean;
	onKeyUp: Function;
}

interface State {
	search: any;
	value: any;
}

export class RenderGoogleSuggestReactive extends React.Component<Props,State> {
	
	constructor(props: Props) {
		super(props);

		this.state = {
			search: "",
			value: props.input.value
    }
	}
	
	private handleInputChange(e: any, input: any) {
		this.setState({search: e.target.value, value: e.target.value});
		input.value = e.target.value;
		input.onChange(e.target.value);
	}

	private handleSelectSuggest(geocodedPrediction: any, input: any) {
		this.setState({search: "", value: geocodedPrediction.formatted_address});
		input.value = geocodedPrediction.formatted_address;
		input.onChange(geocodedPrediction.formatted_address);
	}
 
	render() {
		const { search, value } = this.state;

		const {
      input,
			label,
			className,
			onKeyUp,
			textNoResults,
			meta: {
				error,
				warning,
				touched
			},
			disabled
    } = this.props;
		
		const errorClass = touched && error ? 'error' : '';

		return (
			<ReactGoogleMapLoader
				params={{
					key: MY_API_KEY,
					libraries: "places,geocode",
				}}
				render={ (googleMaps: any) =>
					googleMaps && (
						<ReactGooglePlacesSuggest
							googleMaps={ googleMaps }
							autocompletionRequest={{ input: search }}
							onSelectSuggest={ (geocodedPrediction: any) => this.handleSelectSuggest(geocodedPrediction, input) }
							textNoResults={ textNoResults }
							customRender={ 
								(prediction: any) => (
									<div className="customWrapper">
										{
											prediction ? 
												prediction.description
											: 
												textNoResults
										}
									</div>
								)
							}
						>
							<div className="mb-3">
								<label>
									<b>
										{ label }
									</b>
								</label>

								<div>
									<input
										className={ `${className} ${errorClass}` }
										{ ...input }
										placeholder={ label }
										type="text"
										onKeyUp={ onKeyUp }
										value={ value }
										disabled={ disabled }
										onChange={ (evt: any) => this.handleInputChange(evt, input) }
									/>
									{
										touched &&
											((error && <div className="text-danger">{ error }</div>) ||
											(warning && <div>{ warning }</div>))
									}
								</div>
							</div>
						</ReactGooglePlacesSuggest>
					)
				}
			/>
		);
	}
}