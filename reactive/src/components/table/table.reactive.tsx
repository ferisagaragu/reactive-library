import * as React from 'react';
import { Table, Row, Col, Button } from 'react-bootstrap';
import HeaderTable from './model/header-table.reactive.model';
import keyReactive from '../../components/key/key.reactive';
import FormTable from './model/form-table.reactive.model';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { foreachJSONReactive, oderJSONByReactive, removeInJSONArrayReactive } from '../util/json.reactive';
import { alertQuestionReactive } from '../swal/swal.reactive';
import InputSearchTable from './input-search-table.reactive';
import ActionTableReactive from './action-table.reactive';
import FormTableReactive from './form-table.reactive';

interface Props {
  //className?: string;
  //variant?: string;
  animate?: boolean;
  header: Array<HeaderTable>;
  tableData: Array<any>;
  isLoad?: boolean;
  noTableData?: string;
  
  search?: boolean;
  searchPlaceholder?: string;
  noSearchResult?: string;

  actionsLabel?: string;
  
  create?: boolean;
  edit?: boolean;
  drop?: boolean;
  
  onCreate?: Function;
  onEdit?: Function;
  onDrop?: Function;

  dropAlertTitle?: string;
  dropAlertText?: string;
}

interface State {
  form: Array<FormTable>;
  tableData: Array<any>;
  searchElements: Array<any>;
  isSearch: boolean;
  isCreate: boolean;
  elementDrop: any;
}

export default class TableReactive extends React.Component<Props, State> {

  form: Array<FormTable> = [];
  order: Array<string> = [];

  constructor(props: Props) {
    super(props);

    this.state = {
      form: [],
      tableData: [],
      isSearch: false,
      isCreate: false,
      elementDrop: {},
      searchElements: []
    }
  }
  
  componentDidMount() {
    this.setState({ form: this.form });
  }

  static getDerivedStateFromProps(nextProps: Props, state: State) {
    if (nextProps.tableData !== state.tableData) {
      return {
        tableData: nextProps.tableData,
      };
    }

    return null;
  }

  private renderHeader(): React.ReactElement {
    const { header, drop, edit, actionsLabel } = this.props;
    this.form = [];
    this.order = [];

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

      header.forEach((element: HeaderTable) => {
        this.order.push(element.key);
      });

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

  private renderBody(tableData: Array<any>): Array<React.ReactElement> {
    const { elementDrop } = this.state;
    const finalData = tableData ? tableData : [];

    return finalData.map((element: any) => { 
      if (element.uid === elementDrop.uid) {
        return (
          <tr 
            className="drop" 
            key={ keyReactive() } 
            onAnimationEnd={ () => this.onDropEmit() }
          >
            { this.renderTd(element) }
          </tr>
        );
      }

      return (
        <tr key={ keyReactive() }>
          { this.renderTd(element) }
        </tr>
      );
    });
  }

  private renderTd(element: any): Array<React.ReactElement> {
    const { edit, drop } = this.props;
    const out: Array<any> = [];

    foreachJSONReactive(oderJSONByReactive(element, this.order), 
      (value: any, key: string) => {
        if (key !== 'uid') {
          out.push(
            <td className="text-center" key={ keyReactive() }>
              { value }
            </td> 
          );
        }
      }
    );

    if (edit || drop) {
      out.push(this.renderActions(element));
    }

    return out;
  }

  private renderActions(element: any): React.ReactElement {
    const { drop, edit, onEdit } = this.props;

    return (
      <td className="text-center action-row" key={ keyReactive() }>
        <ActionTableReactive 
          drop={ drop ? true : false } 
          edit={ edit ? true : false }
          onEdit={ () => onEdit && onEdit(element) }  
          onDrop={ () => this.onDrop(element) }
        />
      </td>
    );
  }

  private onCreate(): void {
    const { onCreate } = this.props;

    this.setState({ isCreate: true });
    if (onCreate) {
      onCreate();
    }
  }

  private onDrop(element: any): void {
    const { onDrop, dropAlertTitle, dropAlertText, animate } = this.props;

    alertQuestionReactive(
      'question',
      dropAlertTitle ? dropAlertTitle: 'Delete',
      dropAlertText ? dropAlertText: 'Are you sure you want to delete the row?',
      () => {
        if (onDrop) {
          if (animate) {
            this.setState({ elementDrop: element });
          } else {
            this.setState({ elementDrop: element });
            this.onDropEmit();
          }
        }
      }
    );
  }

  private onDropEmit(): void {
    const { onDrop } = this.props;
    const { elementDrop, searchElements, isSearch } = this.state;

    if (onDrop) {
      onDrop(elementDrop);
    }

    if (isSearch) {
      this.setState(
        { 
          elementDrop: {}, 
          searchElements: 
            removeInJSONArrayReactive(
              searchElements, 
              'uid', 
              elementDrop.uid
            ) 
        }
      );
    } else { 
      this.setState({ elementDrop: {} });
    }
  }

  private onSearch(value: string): void {
    const { tableData, searchElements } = this.state;

    const filterData = tableData.filter(element => {
      let tableText = '';

      foreachJSONReactive(element, (value: string, key: string) => {
        if (key !== 'uid') {
          tableText += value;
        }
      });

      if (tableText.toLowerCase().includes(value.toLowerCase())) {
        return element;
      }
    });

    if (value) {
      this.setState({ isSearch: true, searchElements: filterData });
    } else {
      this.setState({ isSearch: false, searchElements });
    }
  }

  render() {
    const { search, searchPlaceholder, isLoad, noSearchResult, noTableData, animate, create } = this.props;
    const { tableData, searchElements, isSearch, isCreate } = this.state;
    
    return (
      <>
        <Row className="mb-2">
          {
            search &&
              <Col md={ 6 }>
                <InputSearchTable 
                  placeholder={ searchPlaceholder ? searchPlaceholder : '' }
                  onChange={ (value: string) => this.onSearch(value) }
                />
              </Col>
          }

          {
            create && 
              <Col className="text-right pt-1 pr-5" md={ 6 }>
                <Button
                  className="btn-circle"
                  variant="outline-success"
                  onClick={ () => this.onCreate() }
                >
                  <FontAwesomeIcon icon="plus" />
                </Button>
              </Col>
          }
        </Row>

        <Table responsive>
          <thead>
            { this.renderHeader() }
          </thead>

          <tbody>
            { this.renderBody(!isSearch ? tableData : searchElements) }
            
            {
              isCreate &&
                <FormTableReactive 
                  form={ this.form }
                  onApproved={ (formData: any) => { console.log(formData) } }
                />
            }
          </tbody>
        </Table>
        
        { 
          isLoad && !isSearch ?
            <div className="text-center">
              <FontAwesomeIcon className="load-table-indicator" size="2x" icon="spinner" spin/>
            </div>
          :
            tableData.length === 0 ?
              <div className={ `text-center ${ animate ? 'no-result' : ''}` }>
                { noTableData ? noTableData : 'No data to display.' }
              </div>
            :  
              isSearch && (searchElements.length === 0) &&
                <div className={ `text-center ${ animate ? 'no-result' : ''}` }>
                  { noSearchResult ? noSearchResult : 'No results found.' }
                </div>
        }
      </>  
    );
  }
}