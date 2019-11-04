import React, { Component } from 'react';
import { key } from 'reactive';

interface Props {
  exportData: Array<any>;
}

interface State {}

class ExportListComponent extends Component<Props,State> {
  render() {
    const { exportData } = this.props;

    return (
      <ul>
        {
          exportData.map((element: any) => (
            <li key={ key() }>
              <code>
                { element }
              </code>
            </li>
          ))
        }
      </ul>
    );
  }
}

export default ExportListComponent;