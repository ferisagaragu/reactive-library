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
  isSearchable?: boolean;
}

interface SingleProps {
  className?: string;
  options: Array<any>;
  onChange: Function;
  placeholder?: string;
  noOptionsMessage?: string;
  defaultValue?: any;
  isSearchable?: boolean;
}

export const MultiSelectReactive = ({ className, options, onChange, placeholder, noOptionsMessage, defaultValue, isSearchable }: MultiProps) => {
  return (
    <Select 
      className={ className }
      components={ makeAnimated() }
      defaultValue={ defaultValue } 
      options={ options }
      onChange={ (selectedData: any) => onChange(selectedData) }
      noOptionsMessage={ () => noOptionsMessage ? noOptionsMessage : '' }
      placeholder={ placeholder }
      isSearchable={ isSearchable }
      isMulti
    />
  );
} 

export const SingleSelectReactive = ({ className, options, onChange, placeholder, noOptionsMessage, defaultValue, isSearchable }: SingleProps) => {
  return (
    <Select
      className={ className }
      defaultValue={ defaultValue } 
      options={ options }
      onChange={ (selectedData: any) => onChange(selectedData) }
      noOptionsMessage={ () => noOptionsMessage ? noOptionsMessage : '' }
      placeholder={ placeholder }
      isSearchable={ isSearchable }
    />
  );
} 