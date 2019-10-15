import * as React from 'react';
import { Table } from 'react-bootstrap';
import HeaderTable from './model/header-table.reactive.model';

interface Props {
  className?: string;
  variant?: string;
  isLoad?: boolean;
  loadColor?: string;
  header: Array<HeaderTable>;
  tableData: Array<any>;
  actionsLabel?: string;
  noTableData?: string;
  drop?: boolean;
  edit?: boolean;
  create?: boolean;
  search?: boolean;
  searchPlaceholder?: string;
  noSearchResult?: string;
  onCreate?: Function;
  onEdit?: Function;
  onDrop?: Function;
  dropAlertTitle?: string;
  dropAlertText?: string;
}

interface State {}

export default class TableReactive extends React.Component<Props, State> {
  render() {
    return (
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}