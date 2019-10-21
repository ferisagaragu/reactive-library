import * as React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FormTable from './model/form-table.reactive.model';
import { InputTableReactive } from './input-table.reactive';
import keyReactive from '../key/key.reactive';

interface Props {
  form: Array<FormTable>; 
}

interface State {}

export default class FormTableReactive extends React.Component<Props, State> {
  
  tdRef: any = null;

  constructor(props: Props) {
    super(props);
    this.tdRef = React.createRef();
  }
  
  render() {
    const { form } = this.props;

    return (
      <tr ref={ this.tdRef }>
        
        {
          form.map((element: FormTable) => (
            <td>
              <InputTableReactive 
                key={ keyReactive() }
                type={ element.type } 
                value={ 'pedro' }
              />
            </td>
          ))
        }

        <td>
          <Button
            className="btn-circle mr-3"
            variant="outline-success"
          >
            <FontAwesomeIcon icon="check" />
          </Button>

          <Button
            className="btn-circle"
            variant="outline-danger"
          >
            <FontAwesomeIcon icon="times" />
          </Button>
        </td>
      </tr>  
    );
  }
}