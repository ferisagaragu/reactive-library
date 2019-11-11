import React, { Component } from 'react';
import { key } from 'reactive';
import FunctionModel from '../../core/models/function.model';

interface Props {
  propsData: Array<FunctionModel>;
}

interface State {}

class FunctionTableComponent extends Component<Props,State> {
  render() {
    const { propsData } = this.props;

    return (
      <table className="table-props">
        <thead>
          <tr className="tr-props">
            <th className="th-props text-center" style={ { width: '200px' } }>
              Nombre
            </th>
            <th className="th-props text-center" style={ { width: '200px' } }>
              Parametros
            </th>
            <th className="th-props text-center" style={ { width: '200px' } }>
              Retorno
            </th>
            <th className="th-props text-center">
              Descripción
            </th>
          </tr>
        </thead>
        
        <tbody>
          {
            propsData.map((data: FunctionModel) => (
              <tr key={ key() } className="tr-props">
                <td className="td-props">
                  <code>
                    { data.functionName }
                  </code>
                </td>
                <td className="td-props text-center">
                  <code>
                    { data.params }
                  </code>
                </td>
                <td className="td-props text-center">
                  <code>
                    { data.returnStr }
                  </code>
                </td>
                <td className="td-props">
                  { data.description }
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    );
  }
}

export default FunctionTableComponent;