import * as React from 'react';

interface Props {
  placeholder: string;
  value?: string;
  onChange: Function;
}

interface State { 
  value: string;
}

export default class InputSearchTable extends React.Component<Props, State> {
  render() {
    const { placeholder, onChange } = this.props;

		return (
      <>
        <input
          className="form-control"
          type="text"
          placeholder={ placeholder }
          onChange={ (evt) => onChange(evt.target.value) }
        />
      </>
		);
	}
}