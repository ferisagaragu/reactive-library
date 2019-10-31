import * as React from 'react';
import { Table, Row, Col, Button } from 'react-bootstrap';
import { HeaderTable } from '../../exports/model/header-table.model';
import { keyReactive } from '../../components/key/key.reactive';
import FormTable from './model/form-table.reactive.model';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { foreachJSONReactive, oderJSONByReactive, getIndexInJSONArrayReactive, removeInJSONArrayReactive } from '../util/json.reactive';
import { alertQuestionReactive } from '../swal/swal.reactive';
import ActionTableReactive from './action-table.reactive';
import FormTableReactive from './form-table.reactive';

interface Props {
  className?: string;
  variant?: string;
  animate?: boolean;
  header: Array<HeaderTable>;
  tableData: Array<any>;
  isLoad?: boolean;
  noTableData?: string;
  search?: boolean;
  noSearchResult?: string;
  actionsLabel?: string;
  create?: boolean;
  edit?: boolean;
  drop?: boolean;
  showElements: number;
  initCreate: Function;
  initEdit: Function;
  onCreate?: Function;
  onCreateCancel: Function;
  onEditCancel: Function;
  onEdit?: Function;
  onDrop?: Function;
  dropAlertTitle?: string;
  dropAlertText?: string;
  searchHTML: React.ReactElement;
  isSearch: boolean;
}

interface State {
  form: Array<FormTable>;
  tableData: Array<any>;
  isCreate: boolean;
  isEdit: boolean;
  elementCreate: any;
  elementEdit: any;
  renderEdit: boolean;
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
      isCreate: false,
      isEdit: false,
      elementCreate: {},
      elementEdit: {},
      renderEdit: false,
      elementDrop: {}
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
    const { elementDrop, elementCreate, elementEdit, renderEdit } = this.state;
    const finalData = tableData ? tableData : [];

    const out = finalData.map((element: any) => { 
      if (element.uid === elementEdit.uid) {
        if (!renderEdit) {
          return (
            <FormTableReactive 
              key={ keyReactive() }
              form={ this.createEditForm(element) }
              onApproved={ (formData: any) => this.onEdit(formData) }
              onCancel={ () => this.onEditCancel() }
            />
          );
        } else {
          return (
            <tr 
              className="edit-reactive" 
              key={ keyReactive() } 
              onAnimationEnd={ () => this.onEditEmit() }
            >
              { this.renderTd(element) }
            </tr>
          );
        }
      }
      
      if (element.uid === elementDrop.uid) {
        return (
          <tr 
            className="drop-reactive" 
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

    if (elementCreate.uid) {
      out.push(
        <tr 
          className="add-reactive" 
          key={ keyReactive() } 
          onAnimationEnd={ () => this.onCreateEmit() }
        >
          { this.renderTd(elementCreate) }
        </tr>
      );
    }

    return out;
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
    const { drop, edit } = this.props;
    const { isCreate, isEdit } = this.state;

    return (
      <td className="text-center action-row-reactive" key={ keyReactive() }>
        <ActionTableReactive 
          drop={ drop ? true : false } 
          edit={ edit ? true : false }
          onEdit={ () => this.initEdit(element) }  
          onDrop={ () => this.onDrop(element) }
          disabled={ isCreate || isEdit }
        />
      </td>
    );
  }

  private onCreate(formData: any): void {
    const { animate, tableData, showElements } = this.props;

    formData.uid = keyReactive();
    if (tableData) {
      if (tableData.length === showElements ) {
        while(tableData.length > 0) {
          tableData.pop();
        }
      }
    } 
    
    if (animate) {
      this.setState({ elementCreate: formData });
    } else {
      this.onCreateEmit(formData);
    }
  }

  private onCreateEmit(element?: any): void {
    const { onCreate } = this.props;
    const { elementCreate } = this.state;
    
    this.setState({ elementCreate: {}, isCreate: false });
    if (onCreate) {
      onCreate(element ? element : elementCreate);
    }
  }

  private initCreate(): void {
    const { initCreate } = this.props;
    this.setState({ isCreate: true });
    initCreate();
  }

  private onCreateCancel(): void {
    const { onCreateCancel } = this.props;
    this.setState({ isCreate: false });
    onCreateCancel();
  }

  private onEdit(formData: any): void {
    const { animate, tableData } = this.props;
    const { elementEdit } = this.state;
    const index = getIndexInJSONArrayReactive(tableData, 'uid', elementEdit.uid);
    
    foreachJSONReactive(tableData[index], 
      (data: string, key: string) => {
        if (key !== 'uid') {
          tableData[index][key] = formData[key];    
        } else {
          tableData[index][key] = data;
        }
      }
    );

    if (animate) {
      this.setState({ renderEdit: true });
    } else {
      this.onEditEmit(elementEdit);
    }
  }

  private onEditEmit(element?: any): void {
    const { onEdit } = this.props;
    const { elementEdit } = this.state;
    if (onEdit) {
      onEdit(element ? element : elementEdit);
    }
    this.setState({ elementEdit: {}, isEdit: false, renderEdit: false });
  }

  private initEdit(element: any): void {
    const { initEdit } = this.props;
    this.setState({ elementEdit: element, isEdit: true });
    initEdit();
  }

  private onEditCancel(): void {
    const { onEditCancel } = this.props;
    this.setState({ elementEdit: {}, isEdit: false });
    onEditCancel();
  }

  private createEditForm(element: any): Array<FormTable> {
    this.form.forEach((data: FormTable) => {
      data.value = element[data.name];
    });
    return this.form;
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
    const { onDrop, tableData } = this.props;
    const { elementDrop } = this.state;
    
    removeInJSONArrayReactive(tableData, 'uid', elementDrop.uid);

    if (onDrop) {
      onDrop(elementDrop);
    }
    this.setState({ elementDrop: {} });
  }

  render() {
    const { search, isLoad, noSearchResult, noTableData, animate, create, variant, searchHTML, isSearch, className } = this.props;
    const { tableData, isCreate, isEdit } = this.state;
    
    return (
      <div className={ className }>
        <Row className="mb-2">
          { search && searchHTML }

          {
            create && 
              <Col className="text-right pt-1 pr-5" md={ 6 }>
                <Button
                  className="btn-circle-reactive"
                  variant="outline-success"
                  onClick={ () => this.initCreate() }
                  disabled={ isCreate || isEdit || isSearch || isLoad }
                >
                  <FontAwesomeIcon icon="plus" />
                </Button>
              </Col>
          }
        </Row>

        <Table responsive variant={ variant }>
          <thead>
            { this.renderHeader() }
          </thead>

          <tbody>
            { this.renderBody(tableData) }
            
            {
              isCreate &&
                <FormTableReactive 
                  form={ this.form }
                  onApproved={ (formData: any) => this.onCreate(formData) }
                  onCancel={ () => this.onCreateCancel() }
                />
            }
          </tbody>
        </Table>
        
        { 
          isLoad && !isSearch ?
            <div className="text-center">
              <FontAwesomeIcon className="load-table-indicator-reactive" size="2x" icon="spinner" spin/>
            </div>
          :
          tableData ?
            tableData.length === 0 ?
              <div className={ `text-center ${animate ? 'no-result-reactive' : ''}` }>
                { noTableData ? noTableData : 'No data to display.' }
              </div>
            :  
              isSearch && !tableData &&
                <div className={ `text-center ${animate ? 'no-result-reactive' : ''}` }>
                  { noSearchResult ? noSearchResult : 'No results found.' }
                </div>
          :
            <div className={ `text-center ${animate ? 'no-result-reactive' : ''}` }>
              { noTableData ? noTableData : 'No data to display.' }
            </div>
        }
      </div>  
    );
  }
}