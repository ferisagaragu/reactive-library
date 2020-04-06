import * as React from 'react';

const adaptFileEventToValue = (delegate: any) => (e: any) => delegate(e.target.files[0]);

export const RenderFileFieldReactive = ({ 
  input: { value: omitValue, onChange, onBlur, ...inputProps }, 
  meta: omitMeta,
  meta: {
    error,
    warning,
    touched
  },
  id,
  label,
  disabled,
  className,
  accept,
  ...props
}: any) => {
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
          className={ `${className} ${errorClass} render-file` }
          onChange={ adaptFileEventToValue(onChange) }
          onBlur={ adaptFileEventToValue(onBlur) }
          type="file"
          { ...props.input }
          { ...props }
          disabled={ disabled }
          { ...inputProps }
          accept={ accept }
        />  

        {
          touched &&
            ((error && <div className="text-danger">{ error }</div>) ||
            (warning && <div>{ warning }</div>))
        }
      </div>
    </div>
  );
};