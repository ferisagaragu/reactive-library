import React, { Component } from 'react';
import { Row, Col, Link, Button, Space } from 'reactive';
import { ReactComponent as RadiationIcon } from '../../styles/svg/atom.svg';

class NotFoundView extends Component {
  render() {
    return (
      <Row className="justify-content-center _404">
        <Col md={ 1 }>
          <RadiationIcon className="atom-icon" />
        </Col>

        <Col md={ 8 }>
          <h1>
            404 - Aquí no hay reactividad <Space />
            <Link to="/home">
              <Button variant="outline-dark">
                Ir a inicio
              </Button>
            </Link>
          </h1>

          <p>
            La pagina que solicitaste no se encuenta
          </p>
        </Col>
      </Row>
    );
  }
}

export default NotFoundView;