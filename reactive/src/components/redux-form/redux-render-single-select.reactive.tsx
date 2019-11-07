import * as React from 'react';
import { SingleSelectReactive } from '../select/select.reactive';

interface Props { 
  input: any;
  label: string;
  className: string;
  onKeyUp: Function;
  onChange: Function;
  noOptionsMessage: string;
  defaultValue: any;
  options: Array<any>;
  isSearchable?: boolean;
  meta: any;
}

interface State {
  defaultValue: any;
}

export class RenderSingleSelectReactive extends React.Component<Props, State> {
  render () {
    const {
      input,
      label,
      className,
      onKeyUp,
      noOptionsMessage,
      defaultValue,
      options,
      isSearchable,
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
        <SingleSelectReactive 
          className={ `${className} ${errorClass}` }
          { ...input }
          options={ options } 
          onChange={ (value: any) => input.onChange(value) }
          onKeyUp={ onKeyUp }
          onBlur={ () => input.onBlur(input.value) }
          placeholder={ label }
          noOptionsMessage={ noOptionsMessage }
          defaultValue={ defaultValue }
          isSearchable={ isSearchable }
        />
        {
          touched &&
            ((error && <div className="text-danger">{ error }</div>) ||
            (warning && <div>{ warning }</div>))
        }
      </div>
    </div>
    )
  }
}

export default RenderSingleSelectReactive;