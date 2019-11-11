import * as React from 'react';

interface Props { 
  id: string;
  input: any;
  label: string;
  type: string;
  className: string;
  onKeyUp: Function;
  disabled: string;
  meta: any;
}

interface State {}

export class RenderTextFieldReactive extends React.Component<Props, State> {
  render () {
    const {
      id,
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
            id={ id }
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