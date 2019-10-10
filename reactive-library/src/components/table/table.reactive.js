import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import { key } from '../key/key.reactive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { alertQuestion } from '../swal/swal.reactive';
import './table.css'

let metaDataHead = { };

export class TableReactive extends Component {
  
  //RENDERS

  renderHeader() {
    const { header, drop, edit, actionsLabel } = this.props;
    
    if (header) {
      const out = [];

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
    const { tableData, drop, edit } = this.props;

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

        out.push(<tr key={ key() }>{ outRow }</tr>);
      });

      if (!error) {
        return out;
      }
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
    onEdit(elementSelect);
  }

  onDropAction(elementSelect) {
    const { onDrop, dropAlertTitle, dropAlertText } = this.props;
    
    alertQuestion(
      'question', 
      dropAlertTitle ? dropAlertTitle : '',
      dropAlertText ? dropAlertText : '',
      () => {
        onDrop(elementSelect);
      }
    );
  }


  render() {
    const { className, create, onCreate } = this.props;
    
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
    );
  }
}