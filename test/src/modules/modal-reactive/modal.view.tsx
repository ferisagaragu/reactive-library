import React, { Component } from 'react';
import { Row, Col, SyntaxHighlighter, tomorrow, Button, Modal } from 'reactive';
import PropsTableComponent from '../../shared/props-table/props-table.component';
import { exampleCode, propsModal } from './props-modal.data';

interface Props {}

interface State {
  isClose: boolean;
}

class ModalView extends Component<Props,State> {
  
  constructor(props: Props) {
    super(props);

    this.state = {
      isClose: false
    }
  }
  
  render() {
    const { isClose } = this.state;

    return (
      <Row>
        <Col md={ 12 }>
          <h2 className="mb-5">
            Modal
          </h2>
        </Col>

        <Col md={ 12 }>
          <h4>
            Atributos
          </h4>
        </Col>
        
        <Col className="mb-5" md={ 12 }>
          <PropsTableComponent
            propsData={ propsModal }
          />
        </Col>

        <Col md={ 12 }>
          <h4>
            Codígo
          </h4>
        </Col>

        <Col className="mb-5" md={ 8 }>
          <SyntaxHighlighter 
            language="tsx"
            style={ tomorrow } 
          > 
            { exampleCode }
          </SyntaxHighlighter>
        </Col>

        <Col md={ 12 }>
          <h4>
            Demo
          </h4>
        </Col>
        
        <Button
          onClick={ () => this.setState({ isClose: true }) }
        >
          Dame clic!
        </Button>
        
        <Modal 
          title="Titulo del Modal"
          modalShow={ isClose }
          onHide={ () => this.setState({ isClose: false }) }
          size="lg"
          children={
            <div>
              Soy el contenido del Modal
            </div>
          }
          centered={ true }
          closeButton={ true }
        />
      </Row>
    );
  }
}

export default ModalView;