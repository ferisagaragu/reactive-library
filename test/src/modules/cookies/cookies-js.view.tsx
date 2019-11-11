import React, { Component } from 'react';
import { Row, Col } from 'reactive';
import { exportCode } from './props-cookies.data';
import ExportListComponent from '../../shared/export-list/export-list.component';

interface Props {}

interface State {
  dataTable: Array<any>;
  isLoading: boolean;
}

class CookiesJsView extends Component<Props,State> {
  render() {
    return (
      <Row>
        <Col md={ 12 }>
          <h2 className="mb-5">
            Cookies JS
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
          <a href="https://www.npmjs.com/package/js-cookie">js-cookie</a>
        </Col>
      </Row>
    );
  }
}

export default CookiesJsView;