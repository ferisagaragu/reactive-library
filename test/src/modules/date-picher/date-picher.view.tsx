import React, { Component } from 'react';
import { Row, Col, Iframe } from 'reactive';
import ExportListComponent from '../../shared/export-list/export-list.component';
import { exportCode } from './props-date.data';

class DatePicherView extends Component {
  render() {
    return (
      <Row>
        <Col md={ 12 }>
          <h2 className="mb-5">
            Date Picher
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
          
          <Iframe url="https://reactdatepicker.com/"
            width="100%"
            height="800px"
            display="initial"
          />
        </Col>
      </Row>
    )
  }  
}

export default DatePicherView;