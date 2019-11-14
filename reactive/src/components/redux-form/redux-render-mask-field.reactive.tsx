import * as React from 'react';
import { Inputmask } from '../../exports/inputmask.export';

interface Props { 
  input: any;
  label: string;
  type: string;
  className: string;
  disabled: string;
  mask: string;
  meta: any;
  onKeyUp: Function;
}

interface State { }

export class RenderMaskFieldReactive extends React.Component<Props, State> {

  inputMask: any;

  constructor(props: Props) {
    super(props);
    this.inputMask = React.createRef();
  }

  componentDidMount() {
    const { mask } = this.props;
    const im = new Inputmask(mask);
    im.mask(this.inputMask.current);
  }

  render () {
    const {
      input,
      label,
      type,
      className,
      onKeyUp,
      disabled,
      meta: {
        error,
        warning,
        touched
      }
    } = this.props;

    const errorClass = touched && error ? 'error' : '';

    return (
      <div className="mb-3">
        <label>
          <b>
            { label }
          </b>
        </label>
        <div>
          <input
            ref={ this.inputMask }
            className={ `${className} ${errorClass}` }
            { ...input }
            placeholder={ label }
            type={ type }
            onKeyUp={ onKeyUp }
            disabled={ disabled }
          />
          {
            touched &&
              ((error && <div className="text-danger">{ error }</div>) ||
              (warning && <div>{ warning }</div>))
          }
        </div>
      </div>
    );
  }
}