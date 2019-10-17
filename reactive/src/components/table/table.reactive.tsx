import * as React from 'react';
import { Table, Button } from 'react-bootstrap';
import HeaderTable from './model/header-table.reactive.model';
import keyReactive from '../../components/key/key.reactive';
import FormTable from './model/form-table.reactive.model';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { foreachJSON } from '../util/json.reactive';

interface Props {
  className?: string;
  variant?: string;
  isLoad?: boolean;
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

  form: Array<FormTable> = [];
  formRef: any = null;

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
    const { edit, drop } = this.props;
    const out = [];

    foreachJSON(element, (value: any, key: string, index: number) => {
      console.log(value);
      console.log(key);
      console.log(index);
    });

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

    if (edit || drop) {
      out.push(this.renderActions(element));
    }

    return out;
  }

  renderActions(element: any) {
    const { drop, edit, onEdit, onDrop } = this.props;
    const out = [];

    if (edit) {
      out.push(
        <Button 
          key={ keyReactive() }
          className="btn-circle mr-3"
          variant="outline-info"
          onClick={ () => onEdit && onEdit(element) }
          //disabled={ createMode || createEdited }
        >
          <FontAwesomeIcon icon="edit" />
        </Button>
      );
    }

    if (drop) {
      out.push(
        <Button 
          key={ keyReactive() }
          className="btn-circle"
          variant="outline-danger"
          onClick={ () => onDrop && onDrop(element) }
          //disabled={ createMode || createEdited }
        >
          <FontAwesomeIcon icon="trash" />
        </Button>
      );
    }

    return (
      <td className="text-center" key={ keyReactive() }>
        { out }
      </td>
    );
  }

  render() {
    const { tableData } = this.props;

    return (
      <>
        <Table responsive>
          <thead>
            { this.renderHeader() }
          </thead>
          <tbody>
            { this.renderBody() }
          </tbody>
        </Table>

        {
          tableData.length === 0 &&
            <div className="text-center">
              <FontAwesomeIcon className="load-table-indicator" size="2x" icon="spinner" spin/>
            </div>
        }
      </>  
    );
  }
}