import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import { key } from '../key/key.reactive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { alertQuestion } from '../swal/swal.reactive';
import { FormTableReactive } from './form-table.reactive';
import './table.css'

let metaDataHead = { };
let form = [];
let formRef = null;

export class TableReactive extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      elementDrop: null,
      indexDrop: -1,
      form: []
    }

    formRef = React.createRef();
  }

  componentDidMount() {
    this.setState({ form });
  }

  //RENDERS
  renderHeader() {
    const { header, drop, edit, actionsLabel } = this.props;
    
    if (header) {
      const out = [];
      form = [];
    
      for (var jsonKey in header) {
        if (header.hasOwnProperty(jsonKey)) {
          out.push(
            <th key={ key() }>
              { header[jsonKey].label }
            </th>
          );

          metaDataHead[jsonKey] = {
            name: jsonKey,
            type: header[jsonKey].type.name.toLocaleLowerCase()
          };

          form.push({
            name: jsonKey,
            placeholder: '',
            required: true,
            type: 'text',
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
        return <tr>{ out }</tr>;
      } else {
        return <tr>{ out }</tr>;
      }
    }
  }

  renderBody() {
    const { drop, edit, tableData } = this.props;
    const { elementDrop } = this.state;

    if (tableData) {
      const out = [];
      let error = false;

      tableData.forEach(element => {
        const outRow = [];

        if (element.hasOwnProperty('uid')) {
          for (var jsonKey in element) {
            if (element.hasOwnProperty(jsonKey)) {
              if (jsonKey !== 'uid') {
                if (typeof element[jsonKey] === metaDataHead[jsonKey].type) {
                  outRow.push(
                    <td key={ key() }>
                      { element[jsonKey] }
                    </td>
                  );
                } else {
                  console.error(`Type error in '${metaDataHead[jsonKey].name}' key`);
                  error = true;
                }
              }
            } 
          }
        } else {
          console.error(`Table data not cointains uid key`);
          error = true;
        }

        if (drop || edit) {
          outRow.push(this.renderActions(element));
        }

        //Render para cuando se elimina un elemento
        if (elementDrop) {
          this.renderOnDrop(element, outRow, out);
        } else {
          out.push(<tr key={ key() }>{ outRow }</tr>);
        }
      });

      out.push(
        <FormTableReactive 
          key={ key() } 
          formData={ this.state.form } 
          onApproved={ () => this.onSubmitForm() } 
        />
      );

      if (!error) {
        return out;
      }
    }
  }

  renderOnDrop(element, outRow, out) {
    const { elementDrop, indexDrop } = this.state;

    if (elementDrop.uid === element.uid) {
      out.push(
        <tr 
          className="drop" 
          key={ key() }
          onAnimationEnd={ () => this.onDropAnimationEnd(indexDrop) }
        >
          { outRow }
        </tr>
      );
    } else {
      out.push(<tr key={ key() }>{ outRow }</tr>);
    }
  }




  renderActions(elementSelect) {
    const { drop, edit } = this.props;
    const out = [];

    if (edit) {
      out.push(
        <Button 
          key={ key() }
          className="btn-circle mr-3"
          variant="outline-info"
          onClick={ () => this.onEditAction(elementSelect) }
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
          onClick={ () => this.onDropAction(elementSelect) }
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

  //FUCTIONS
  onEditAction(elementSelect) {
    const { onEdit } = this.props;
    if (onEdit) {
      onEdit(elementSelect);
    }
  }

  onDropAction(elementSelect) {
    const { tableData ,onDrop, dropAlertTitle, dropAlertText } = this.props;
    
    if (onDrop) {
      alertQuestion(
        'question', 
        dropAlertTitle ? dropAlertTitle : '',
        dropAlertText ? dropAlertText : '',
        () => {
          tableData.forEach((element, index) => {
            if (element.uid === elementSelect.uid) {
              this.setState({ elementDrop: element, indexDrop: index });
            }
          });

          onDrop(elementSelect);
        }
      );
    }
  }

  onDropAnimationEnd(indexDrop) {
    const { tableData } = this.props;
    tableData.splice(indexDrop, 1);
    this.setState({ elementDrop: null, indexDrop: -1 });
  }

  onSubmitForm() {
    const formElemets = formRef.current.getElementsByTagName('input');
    let outData = { };
    let error = false;

    for(var i = 0 ; i < formElemets.length ; i++){
      var item = formElemets.item(i);

      if (item.value) {
        outData[item.name] = item.value;
        form[i].value = item.value;
      } else {
        item.classList.add('error-field');
        form[i].error = true;
        error = true;
      }
    }

    if (error) {
      this.setState({ form })
    } else {
      console.log(outData);
    }
  }
  
  render() {
    const { className, create, onCreate, tableData, noTableData } = this.props;
    
    return (
      <div>
        <div className="text-right mb-2 mr-2">
          {
            create && 
              <Button 
                className="btn-circle"
                variant="outline-success"
                onClick={ () => onCreate() }
              >
                <FontAwesomeIcon icon="plus" />
              </Button>
          }
        </div>
        
        <div ref={ formRef } >
          <Table className={ className } responsive>
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