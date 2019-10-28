import * as React from 'react';
import { Button, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  placeholder: string;
  value?: string;
  onSearch: Function;
  disabled: boolean;
}

interface State { 
  value: string;
}

export default class InputSearchTable extends React.Component<Props, State> {
  
  inputRef: any = null;

  constructor(props: Props) {
    super(props);

    this.inputRef = React.createRef();
  }

  private onEnter(e?: any): void {
    const { onSearch } = this.props;
    if (e) {
      let event = e || window.event;
      let charCode = event.which || event.keyCode;

      if ( charCode == '13' ) {
        onSearch(this.inputRef.current.value);
      }
    } else {
      onSearch(this.inputRef.current.value);
    }
  }
  
  render() {
    const { placeholder, disabled } = this.props;

		return (
      <>
        <Col md={ 5 }>
          <input
            ref={ this.inputRef }
            className="form-control"
            type="text"
            placeholder={ placeholder }
            onKeyPress={ (e: any) => this.onEnter(e) }
            disabled={ disabled }
          />
        </Col>

        <Col md={ 1 }>
          <Button
            className="btn-circle-reactive mt-1"
            variant="outline-dark"
            onClick={ () => this.onEnter() }
            disabled={ disabled }
          >
            <FontAwesomeIcon icon="search" />
          </Button>
        </Col>
      </>
		);
	}
}