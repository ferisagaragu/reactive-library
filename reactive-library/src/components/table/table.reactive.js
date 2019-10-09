import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import { key } from '../key/key.reactive';
import 'bootstrap/dist/css/bootstrap.css';
import './table.css'

let metaDataHead = { };

export class TableReactive extends Component {
  
  renderHeader() {
    const { header, erase, edit, actionsLabel } = this.props;
    
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

      if (erase || edit) {
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
    const { tableData, erase, edit } = this.props;

    if (tableData) {
      const out = [];
      let error = false;

      tableData.forEach(element => {
        const outRow = [];

        for (var jsonKey in element) {
          if (element.hasOwnProperty(jsonKey)) {
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

        if (erase || edit) {
          outRow.push(this.renderActions());
        }

        out.push(<tr key={ key() }>{ outRow }</tr>);
      });

      if (!error) {
        return out;
      }
    }
  }

  renderActions() {
    const { erase, edit } = this.props;
    const out = [];

    if (edit) {
      out.push(<Button className="mr-3" key={ key() }>Edit</Button>);
    }

    if (erase) {
      out.push(<Button key={ key() }>Drop</Button>);
    }

    return (
      <td className="text-center" key={ key() }>
        { out }
      </td>
    );
  }
  
  render() {
    const { className, create } = this.props;
    
    return (
      <div>
        <div className="text-right mb-3">
          {
            create && 
              <Button 
                className="btn btn-circle btn-lg"
                variant="outline-success"
              >
                x
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