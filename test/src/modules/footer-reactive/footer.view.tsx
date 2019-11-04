import React, { Component } from 'react';
import { Row, Col, SyntaxHighlighter, tomorrow, Footer } from 'reactive';
import PropsTableComponent from '../../shared/props-table/props-table.component';
import { exampleCode, propsFooter } from './props-footer.data';

interface Props {}

interface State {}

class FooterView extends Component<Props,State> {
  render() {
    return (
      <Row>
        <Col md={ 12 }>
          <h2 className="mb-5">
            Footer
          </h2>
        </Col>

        <Col md={ 12 }>
          <h4>
            Atributos
          </h4>
        </Col>
        
        <Col className="mb-5" md={ 12 }>
          <PropsTableComponent
            propsData={ propsFooter }
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

        <Col className="mb-4" md={ 12 }>
          <h4>
            Demo
          </h4>
        </Col>

        <Col className="mb-5" md={ 12 }>
          <Footer
            left={ <div>left</div> }
            center={ <div>center</div> }
            right={ <div>right</div> }
          />
        </Col>

        <Col md={ 12 }>
          <Footer>
            Soy un footer
          </Footer>
        </Col>
      </Row>
    );
  }
}

export default FooterView;