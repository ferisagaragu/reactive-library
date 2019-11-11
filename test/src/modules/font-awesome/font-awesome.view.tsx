import React, { Component } from 'react';
import { Row, Col } from 'reactive';
import ExportListComponent from '../../shared/export-list/export-list.component';
import { exportCode } from './props-font.data';

class FontAwesomeView extends Component {
  render() {
    return (
      <Row>
        <Col md={ 12 }>
          <h2 className="mb-5">
            Font Awesome
          </h2>
        </Col>

        <Col md={ 12 }>
          <h4>
            Exports
          </h4>
        </Col>
        
        <Col className="mb-5" md={ 8 }>
          <ExportListComponent 
            exportData={ exportCode }
          />
        </Col>

        <Col md={ 12 }>
          <h4>
            Web Oficial
          </h4>
          <a href="https://github.com/FortAwesome/react-fontawesome">react-fontawesome</a>
        </Col>
      </Row>
    )
  }  
}

export default FontAwesomeView;