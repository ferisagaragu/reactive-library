import React, { Component } from 'react';
import { Row, Col } from 'reactive';

interface Props {}

interface State {}

class CssView extends Component<Props,State> {
  render() {
    return (
      <Row>
        <Col md={ 12 }>
          <h2 className="mb-5">
            Css
          </h2>
        </Col>

        <Col className="mb-5" md={ 12 }>
          <h4>
            Estilos
          </h4>

          <code>
            r-spin
          </code>

          <div className="mt-5 mb-5 css-div r-spin" />

          <code>
            r-gradient
          </code>

          <div className="mt-5 r-gradient css-div2" />
        </Col>
      </Row>
    );
  }
}

export default CssView;