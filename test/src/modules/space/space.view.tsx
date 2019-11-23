import React, { Component } from 'react';
import { Row, Col, SyntaxHighlighter, tomorrow } from 'reactive';
import PropsTableComponent from '../../shared/props-table/props-table.component';
import { exampleCode, props } from './props-spance.data';

interface Props {}

interface State {}

class SpaceView extends Component<Props,State> {
  render() {
    return (
      <Row>
        <Col md={ 12 }>
          <h2 className="mb-5">
            Space
          </h2>
        </Col>

        <Col md={ 12 }>
          <h4>
            Atributos
          </h4>
        </Col>
        
        <Col className="mb-5" md={ 12 }>
          <PropsTableComponent
            propsData={ props }
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
      </Row>
    );
  }
}

export default SpaceView;