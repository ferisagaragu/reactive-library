import React, { Component } from 'react';
import PropsModel from '../../core/models/props.model';
import { key } from 'reactive';

interface Props {
  propsData: Array<PropsModel>;
}

interface State {}

class PropsTableComponent extends Component<Props,State> {
  render() {
    const { propsData } = this.props;

    return (
      <table className="table-props">
        <thead>
          <tr className="tr-props">
            <th className="th-props text-center" style={ { width: '200px' } }>
              Atributo
            </th>
            <th className="th-props text-center">
              Tipo
            </th>
            <th className="th-props text-center">
              Obligatorio
            </th>
            <th className="th-props text-center">
              Descripción
            </th>
          </tr>
        </thead>
        
        <tbody>
          {
            propsData &&
              propsData.map((data: PropsModel) => (
                <tr key={ key() } className="tr-props">
                  <td className="td-props">
                    <code>
                      { data.propName }
                    </code>
                  </td>
                  <td className="td-props td-big-props text-center">
                    <code>
                      { data.type }
                    </code>
                  </td>
                  <td className="td-props text-center">
                    { data.required && '✓' }
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

export default PropsTableComponent;