import React, { Component } from 'react';
import { Row, Col, SyntaxHighlighter, tomorrow } from 'reactive';
import PropsTableComponent from '../../shared/props-table/props-table.component';
import { exampleCode, propsHeader, propsHeaderModel, propsHeaderModelSub } from './props-header.data';

interface Props {}

interface State {}

class HeaderView extends Component<Props,State> {
  render() {
    return (
      <Row>
        <Col md={ 12 }>
          <h2 className="mb-5">
            Header
          </h2>
        </Col>

        <Col md={ 12 }>
          <h4>
            Atributos
          </h4>
        </Col>
        
        <Col className="mb-5" md={ 12 }>
          <PropsTableComponent
            propsData={ propsHeader }
          />
        </Col>

        <Col md={ 12 }>
          <h4>
            Modelos
          </h4>
        </Col>

        <Col className="mb-3" md={ 12 }>
          <code>BurgerElement</code>
          <PropsTableComponent
            propsData={ propsHeaderModel }
          />
        </Col>

        <Col className="mb-5" md={ 12 }>
          <code>BurgerSubElement</code>
          <PropsTableComponent
            propsData={ propsHeaderModelSub }
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

export default HeaderView;