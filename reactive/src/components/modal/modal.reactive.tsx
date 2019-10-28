import * as React from 'react';
import { Modal } from 'react-bootstrap';

interface Props { 
  title: string;
  modalShow: boolean;
  onHide: Function;
  size: 'sm' | 'lg' | 'xl';
  children?: any;
  centered?: boolean;
  closeButton?: boolean;
}

interface State {}

export class ModalReactive extends React.Component<Props, State> {
  render() {
    const { modalShow, size, title, children, onHide, centered, closeButton } = this.props;

    return (
      <Modal
        size={ size }
        show={ modalShow }
        onHide={ () => onHide() }
        centered={ centered }
      >
        <Modal.Header closeButton={ closeButton }>
          <Modal.Title id="example-modal-sizes-title-lg">
            { title }
          </Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
          { children }
        </Modal.Body>
      </Modal>
    );
  }
}