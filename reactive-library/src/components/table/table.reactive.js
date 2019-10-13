import React, { Component } from 'react';
import { Table, Button, Row, Col } from 'react-bootstrap';
import { key } from '../key/key.reactive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { alertQuestion } from '../swal/swal.reactive';
import { FormTableReactive } from './form-table.reactive';
import { InputSearchTable } from './input-search-table.reactive';
import './style/table.css';

let form = [];
let formRef = null;

export class TableReactive extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      headerRender: null,
      tableData: this.props.tableData,
      createMode: false,
      elementCreated: {},
      createEdited: false,
      elementEditedUid: '',
      elementEditedAnimation: false,
      elementEdited: {},
      indexDrop: -1,
      elementDroped: {},
      form: []
    }

    formRef = React.createRef();
  }

  componentDidMount() {
    this.setState({ form });
  }

  renderHeader() {
    const { header, drop, edit, actionsLabel } = this.props;
    const out = [];
    form = [];

    for (var jsonKey in header) {
      if (header.hasOwnProperty(jsonKey)) {
        out.push(
          <th
            className="text-center" 
            key={ key() }
          >
            { header[jsonKey].label }
          </th>
        );

        form.push({
          name: jsonKey,
          placeholder: header[jsonKey].placeholder,
          required: header[jsonKey].required,
          type: header[jsonKey].type.name.toLocaleLowerCase(),
          value: '',
          error: false
        });
      }
    }

    if (drop || edit) {
      out.push(
        <th className="text-center" key={ key() }>
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

  renderBody() {
    const { tableData, createMode, form, elementCreated, elementEdited, elementDroped, elementEditedAnimation } = this.state;
    
    let rowOut = tableData.map(element => {
      if (elementCreated.uid === element.uid) {
        return (
          <tr 
            className="add" 
            key={ key() }
            onAnimationEnd={ () => this.onAnimationEndCreate(element) }
          >
            { this.renderBodyTd(element) }
          </tr>
        );
      }

      if (elementEdited.uid === element.uid) {
        if (elementEditedAnimation) {
          return (
            <tr 
              className="edit" 
              key={ key() }
              onAnimationEnd={ () => this.onAnimationEndEdit(element) }
            >
              { this.renderBodyTd(element) }
            </tr>
          );
        }

        return (
          <FormTableReactive 
            key={ key() } 
            formData={ form } 
            onApproved={ () => this.onEditSubmit() }
            onCancel={ () => this.onCancelEdit() }
          />
        );
      }

      if (elementDroped.uid === element.uid) {
        return (
          <tr 
            className="drop" 
            key={ key() }
            onAnimationEnd={ () => this.onAnimationEndDrop() }
          >
            { this.renderBodyTd(element) }
          </tr>
        );
      }
      
      return (
        <tr key={ key() }>
          { this.renderBodyTd(element) }
        </tr>
      );
    });
    
    if (createMode) {
      rowOut.push(
        <FormTableReactive 
          key={ key() } 
          formData={ form } 
          onApproved={ () => this.onCreateSubmit() }
          onCancel={ () => this.onCancelCreate() }
        />
      );
    }
    
    return rowOut;
  }

  renderBodyTd(element) {
    const { edit, drop } = this.props;
    const out = [];

    for (var jsonKey in element) {
      if (element.hasOwnProperty(jsonKey) && element.hasOwnProperty('uid')) {
        if (jsonKey !== 'uid') {
          out.push(
            <td className="text-center" key={ key() }>
              { element[jsonKey] }
            </td> 
          );
        }
      }
    }

    if (edit || drop) {
      out.push(this.renderActions(element));
    }

    return out;
  }

  renderActions(elementSelectd) {
    const { drop, edit } = this.props;
    const { createMode, createEdited } = this.state;
    const out = [];

    if (edit) {
      out.push(
        <Button 
          key={ key() }
          className="btn-circle mr-3"
          variant="outline-info"
          onClick={ () => this.onEditAction(elementSelectd) }
          disabled={ createMode || createEdited }
        >
          <FontAwesomeIcon icon="edit" />
        </Button>
      );
    }

    if (drop) {
      out.push(
        <Button 
          key={ key() }
          className="btn-circle"
          variant="outline-danger"
          onClick={ () => this.onDropAction(elementSelectd) }
          disabled={ createMode || createEdited }
        >
          <FontAwesomeIcon icon="trash" />
        </Button>
      );
    }

    return (
      <td className="text-center" key={ key() }>
        { out }
      </td>
    );
  }

  //Create functions
  onCreateAction() {
    this.setState({ createMode: true });
  }

  onCancelCreate() {
    this.setState({ createMode: false, form });
  }

  onCreateSubmit() {
    const { tableData } = this.state;
    const formData = this.submitForm();
    
    if (formData) {
      formData.uid = key();
      tableData.push(formData);
      this.setState( { tableData, createMode: false, elementCreated: formData, form } );
    }
  }

  onAnimationEndCreate(formData) {
    const { onCreate } = this.props;
    this.setState({ elementCreated: {} });
    onCreate(formData);
  }

  //Edit functions
  onEditAction(elementSelectd) {
    let { form } = this.state;
    let i = 0;
    
    for (var jsonKey in elementSelectd) {
      if (elementSelectd.hasOwnProperty(jsonKey)) {
        if (jsonKey !== 'uid') {
          form[i].value = elementSelectd[jsonKey];
          i++;
        }
      }
    }

    this.setState({ elementEdited: elementSelectd, elementEditedUid: elementSelectd.uid, createEdited: true ,form });
  }

  onCancelEdit() {
    this.setState({ elementEdited: {}, elementEditedUid: '', createEdited: false, form });
  }

  onEditSubmit() {
    const { tableData, elementEditedUid } = this.state;
    const formData = this.submitForm();

    if (formData) {
      tableData.map(element => {
        if (elementEditedUid === element.uid) {
          for (var jsonKey in element) {
            if (element.hasOwnProperty(jsonKey)) {
              if (jsonKey !== 'uid') {
                element[jsonKey] = formData[jsonKey];
              }
            }
          }
        }
      });

      this.setState( { tableData, elementEditedAnimation: true, createEdited: false, form } );
    }
  }

  onAnimationEndEdit(elementEdit) {
    const { onEdit } = this.props;
    this.setState({ elementEdited: {}, elementEditedAnimation: false })
    onEdit(elementEdit);
  }

  //Drop functions
  onDropAction(elementSelectd) {
    const { tableData } = this.state;
    const { dropAlertTitle, dropAlertText } = this.props;

    alertQuestion(
      'question', 
      dropAlertTitle ? dropAlertTitle : '',
      dropAlertText ? dropAlertText : '',
      () => {
        tableData.forEach((element, index) => {
          if (element.uid === elementSelectd.uid) {
            this.setState({ elementDroped: element, indexDrop: index });
          }
        });
      }
    );
  }

  onAnimationEndDrop() {
    const { indexDrop, tableData, elementDroped } = this.state;
    const { onDrop } = this.props;
    tableData.splice(indexDrop, 1);
    onDrop(elementDroped);
    this.setState({ indexDrop: -1, elementDroped: {}, tableData });
  }

  //Submit from function
  submitForm() {
    const formElemets = formRef.current.getElementsByTagName('input');
    const { form } = this.state;
    let outData = { };
    let error = false;

    for(var i = 0 ; i < formElemets.length ; i++){
      var item = formElemets.item(i);

      if (form[i].required) {
        if (item.value) {
          outData[item.name] = item.value;
          form[i].value = item.value;
        } else {
          form[i].error = true;
          error = true;
        }
      } else {
        outData[item.name] = item.value;
        form[i].value = item.value;
      }
    }

    if (error) {
      this.setState({ form });
      return null;
    } else {
      return outData;
    }
  }

  render() {
    const { className, create, tableData, noTableData, search } = this.props;
    const { createEdited } = this.state;
    
    return (
      <div className={ className }>
        <Row className="mb-2">
          <Col md={ 11 }>
            {
              search &&
                <InputSearchTable className="input-search" />
            }
          </Col>

          <Col className="text-center mt-1" md={ 1 }>
            {
              create && 
                <Button 
                  className="btn-circle"
                  variant="outline-success"
                  onClick={ () => this.onCreateAction() }
                  disabled={ createEdited }
                >
                  <FontAwesomeIcon icon="plus" />
                </Button>
            }
          </Col>
        </Row>
        
        <div ref={ formRef } >
          <Table responsive>
            <thead>
              {
                this.renderHeader()
              }
            </thead>

            <tbody>
              {
                this.renderBody()
              }
            </tbody>
          </Table>
        </div>
        
        {
          tableData &&
            tableData.length === 0 &&
              <div className="text-center no-result">
                { noTableData }
              </div>
        }
      </div>
    );
  }
}