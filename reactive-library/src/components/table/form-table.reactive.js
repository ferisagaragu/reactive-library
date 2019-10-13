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
    const { onApproved, onCancel } = this.props; 

    return (
      <tr>
        { 
          renderForm &&
            renderForm.map(inputElement => (
              <InputTable 
                key={ key() }
                name={ inputElement.name }
                placeholder={ inputElement.placeholder }
                type={ inputElement.type }
                value={ inputElement.value }
                error={ inputElement.error }
                required={ inputElement.required }
              />
            ))
        }

        <td className="text-center">
          <Button 
            className="btn-circle mr-3"
            onClick={ () => onApproved() }
            variant="outline-success"
          > 
            <FontAwesomeIcon icon="check" />
          </Button>

          <Button
            className="btn-circle"
            onClick={ () => onCancel() }
            variant="outline-danger"
          > 
            <FontAwesomeIcon icon="times" />
          </Button>
        </td>
        
      </tr>  
    );
  }
}