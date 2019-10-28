import * as React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  edit: boolean;
  drop: boolean;
  disabled: boolean;
  onEdit: Function;
  onDrop: Function;
}

interface State {}

export default class ActionTableReactive extends React.Component<Props, State> {
  render() {
    const { onEdit, onDrop, edit, drop, disabled } = this.props;

    return (
      <>
        {
          edit &&
            <Button 
              className="btn-circle-reactive mr-3"
              variant="outline-info"
              onClick={ () => onEdit() }
              disabled={ disabled }
            >
              <FontAwesomeIcon icon="edit" />
            </Button>
        }

        {
          drop &&
            <Button 
              className="btn-circle-reactive"
              variant="outline-danger"
              onClick={ () => onDrop() }
              disabled={ disabled }
            >
              <FontAwesomeIcon icon="trash" />
            </Button>
        }
      </>  
    );
  }
}