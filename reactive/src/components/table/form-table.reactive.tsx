import * as React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FormTable from './model/form-table.reactive.model';
import { InputTableReactive } from './input-table.reactive';
import keyReactive from '../key/key.reactive';

interface Props {
  form: Array<FormTable>;
  onApproved: Function;
  onCancel: Function;
}

interface State {}

export default class FormTableReactive extends React.Component<Props, State> {
  
  tdRef: any = null;

  constructor(props: Props) {
    super(props);
    this.tdRef = React.createRef();
  }
  
  private submitForm(): void {
    const { onApproved } = this.props;
    const inputList = this.tdRef.current.getElementsByTagName('input');
    let dataOut = {};
    let isSuccess = true;

    for (let input of inputList) {
      if (input.value) {
        dataOut[input.id] = input.value;
        if (input.required) {
          input.classList.remove('error');
        }
      } else if (!input.required) {
        dataOut[input.id] = input.value;
      }else {
        if (input.required) {
          input.classList.add('error');
        }
        isSuccess = false;
      }
    }

    if (isSuccess) {
      onApproved(dataOut)
    }
  }

  render() {
    const { form, onCancel } = this.props;

    return (
      <tr ref={ this.tdRef }>
        
        {
          form.map((element: FormTable) => (
            <td key={ keyReactive() }>
              <InputTableReactive
                name={ element.name } 
                type={ element.type } 
                value={ element.value }
                required={ element.required }
              />
            </td>
          ))
        }

        <td>
          <Button
            className="btn-circle mr-3"
            variant="outline-success"
            onClick={ () => this.submitForm() }
          >
            <FontAwesomeIcon icon="check" />
          </Button>

          <Button
            className="btn-circle"
            variant="outline-danger"
            onClick={ () => onCancel() }
          >
            <FontAwesomeIcon icon="times" />
          </Button>
        </td>
      </tr>  
    );
  }
}