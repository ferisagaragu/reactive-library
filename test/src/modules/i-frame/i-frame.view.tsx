import React, { Component } from 'react';
import { Row, Col } from 'reactive';
import ExportListComponent from '../../shared/export-list/export-list.component';
import { exportCode } from './props-frame.data';

class IFrameView extends Component {
  render() {
    return (
      <Row>
        <Col md={ 12 }>
          <h2 className="mb-5">
            IFrame
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

          <a href="https://www.npmjs.com/package/react-iframe">react-iframe</a>
        </Col>
      </Row>
    )
  }  
}

export default IFrameView;