import React, { Component } from 'react';
import { key } from '../key/key.reactive';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { InputTable } from './table-input.reactive';

export class FormTableReactive extends Component {

  constructor(props) {
    super(props);
    
    this.state = { 
      renderForm: this.props.formData
    };
  }

  render() {
    const { renderForm } = this.state;
    const { onApproved } = this.props; 

    return (
      <tr>
        { 
          renderForm &&
            renderForm.map(inputElement => (
              <InputTable 
                key={ key() }
                name={ inputElement.name }
                placeholder={ inputElement.placeholder }
                required={ inputElement.required }
                type={ inputElement.type }
                value={ inputElement.value }
                error={ inputElement.error }
              />
            ))
        }

        <td>
          <Button 
            onClick={ () => onApproved() }
          > 
            Enviar
          </Button>
        </td>
        
      </tr>  
    );
  }
}