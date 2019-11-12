import React, { Component } from 'react';
import { Row, Col, SyntaxHighlighter, tomorrow } from 'reactive';
import { propsFunction, exampleCode } from './json.data';
import FunctionTableComponent from '../../shared/props-table/fuction-table.component';

interface Props {}

interface State {}

class JSONView extends Component<Props,State> {
  render() {
    return (
      <Row>
        <Col md={ 12 }>
          <h2 className="mb-5">
            JSON
          </h2>
        </Col>

        <Col className="mb-5" md={ 12 }>
          <h4>
            Funciones
          </h4>

          <FunctionTableComponent
            propsData={ propsFunction }
          />
        </Col>

        <Col md={ 12 }>
          <h4>
            Codígo
          </h4>

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

export default JSONView;