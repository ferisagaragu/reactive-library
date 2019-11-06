import * as React from 'react';
import Select from "react-select";
import makeAnimated from 'react-select/animated';

interface MultiProps {
  className?: string;
  options: Array<any>;
  onChange: Function;
  placeholder?: string;
  noOptionsMessage?: string;
  defaultValue?: Array<any>;
}

interface SingleProps {
  className?: string;
  options: Array<any>;
  onChange: Function;
  placeholder?: string;
  noOptionsMessage?: string;
  defaultValue?: any;
}

export const MultiSelectReactive = ({ className, options, onChange, placeholder, noOptionsMessage, defaultValue }: MultiProps) => {
  return (
    <Select 
      className={ className }
      components={ makeAnimated() }
      defaultValue={ defaultValue } 
      options={ options }
      onChange={ (selectedData: any) => onChange(selectedData) }
      noOptionsMessage={ () => noOptionsMessage ? noOptionsMessage : '' }
      placeholder={ placeholder }
      isMulti
    />
  );
} 

export const SingleSelectReactive = ({ className, options, onChange, placeholder, noOptionsMessage, defaultValue }: SingleProps) => {
  return (
    <Select
      className={ className }
      defaultValue={ defaultValue } 
      options={ options }
      onChange={ (selectedData: any) => onChange(selectedData) }
      noOptionsMessage={ () => noOptionsMessage ? noOptionsMessage : '' }
      placeholder={ placeholder }
    />
  );
} 