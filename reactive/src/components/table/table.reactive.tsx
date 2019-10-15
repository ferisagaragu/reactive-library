import * as React from 'react';
import { Table } from 'react-bootstrap';
import HeaderTable from './model/header-table.reactive.model';
import keyReactive from '../../components/key/key.reactive';
import FormTable from './model/form-table.reactive.model';

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

interface State {

}

export default class TableReactive extends React.Component<Props, State> {

  form: Array<FormTable> = [];
  formRef: any = null;
  //numberIndex: number = -1;

  constructor(props: Props) {
    super(props);

    this.state = {

    }

    this.formRef = React.createRef();
  }
  
  componentDidMount() {
    this.setState({ form: this.form });
  }

  private renderHeader(): React.ReactElement {
    const { header, drop, edit, actionsLabel } = this.props;
    this.form = [];

    const out = header.map((headerData: HeaderTable) => {
      this.form.push( 
        new FormTable({
          name: headerData.key,
          placeholder: headerData.placeholder,
          required: headerData.required,
          type: headerData.type,
          value: '',
          error: false
        })
      );

      return (
        <th
          className="text-center" 
          key={ keyReactive() }
        >
          { headerData.label }
        </th>
      );
    });

    if (drop || edit) {
      out.push(
        <th className="text-center" key={ keyReactive() }>
          { actionsLabel ? actionsLabel : 'Actions' }
        </th>
      );
    }

    return (
      <tr>
        { out }
      </tr>
    );
  }

  private renderBody(): Array<React.ReactElement> {
    const { tableData } = this.props;

    return tableData.map((element: any) => (
      <tr>
        { this.renderTd(element) }
      </tr>
    ));
  }

  renderTd(element: any): Array<React.ReactElement> {
    //const { edit, drop } = this.props;
    const out = [];

    for (var jsonKey in element) {
      if (element.hasOwnProperty(jsonKey) && element.hasOwnProperty('uid')) {
        if (jsonKey !== 'uid') {
          out.push(
            <td className="text-center" key={ keyReactive() }>
              { element[jsonKey] }
            </td> 
          );
        }
      } else {
        console.error(`tableData does not contain the 'uid' key`);
      }
    }

    /*if (edit || drop) {
      out.push(this.renderActions(element));
    }*/

    return out;
  }



  render() {
    return (
      <Table responsive>
        <thead>
          { this.renderHeader() }
        </thead>
        <tbody>
          { this.renderBody() }
        </tbody>
      </Table>
    );
  }
}