import * as React from 'react';
import { Modal } from 'react-bootstrap';

interface Props { 
  modalShow: boolean;
  size: 'sm' | 'lg' | 'xl';
  centered?: boolean;
  onHide: Function;
}

interface State {}

export class SingleModalReactive extends React.Component<Props, State> {
  render() {
    const { modalShow, size, children, onHide, centered } = this.props;

    return (
      <Modal
        size={ size }
        show={ modalShow }
        onHide={ () => onHide() }
        centered={ centered }
      >
        { children }
      </Modal>
    );
  }
}