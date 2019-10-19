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
  
  input: any = null;

  constructor(props: Props) {
    super(props);
    this.input = React.createRef();
  }
  
  render() {
    const { placeholder, onChange } = this.props;

		return (
      <>
        <input
          ref={ this.input }
          className="form-control"
          type="text"
          placeholder={ placeholder }
          onChange={ (evt) => onChange(evt.target.value, this.input) }
        />
      </>
		);
	}
}