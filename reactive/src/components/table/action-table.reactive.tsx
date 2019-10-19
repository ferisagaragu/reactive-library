import * as React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  edit: boolean;
  drop: boolean;
  onEdit: Function;
  onDrop: Function;
}

interface State {}

export default class ActionTableReactive extends React.Component<Props, State> {
  render() {
    const { onEdit, onDrop, edit, drop } = this.props;

    return (
      <>
        {
          edit &&
            <Button 
              className="btn-circle mr-3"
              variant="outline-info"
              onClick={ () => onEdit() }
              //disabled={ createMode || createEdited }
            >
              <FontAwesomeIcon icon="edit" />
            </Button>
        }

        {
          drop &&
            <Button 
              className="btn-circle"
              variant="outline-danger"
              onClick={ () => onDrop() }
              //disabled={ createMode || createEdited }
            >
              <FontAwesomeIcon icon="trash" />
            </Button>
        }
      </>  
    );
  }
}