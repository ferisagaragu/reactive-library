import React, { Component } from 'react';
import { Row, Table, HeaderTable, Firebase, convertJSONToArray, key, Col, SyntaxHighlighter, tomorrow } from 'reactive';
import PropsTableComponent from '../../shared/props-table/props-table.component';
import { propsTable, exampleCode, propsTableHeader } from './props-table.data';

interface Props {}

interface State {
  dataTable: Array<any>;
  isLoading: boolean;
}

class TableView extends Component<Props,State> {
  
  firebase = new Firebase();

  constructor(props: Props) {
    super(props);

    this.state = {
      dataTable: [],
      isLoading: true
    }
  }

  componentDidMount() {
    this.firebase.on('tableReactive',(data: any) => {
      this.setState({ dataTable: convertJSONToArray(data.val()), isLoading: false });
    });
  }
  
  render() {
    const { dataTable, isLoading } = this.state;

    return (
      <Row>
        <Col md={ 12 }>
          <h2 className="mb-5">
            Table
          </h2>
        </Col>

        <Col md={ 12 }>
          <h4>
            Atributos
          </h4>
        </Col>
        
        <Col className="mb-5" md={ 12 }>
          <PropsTableComponent
            propsData={ propsTable }
          />
        </Col>

        <Col md={ 12 }>
          <h4>
            Modelos
          </h4>
        </Col>

        <Col className="mb-5" md={ 12 }>
          <code>HeaderTable</code>
          <PropsTableComponent
            propsData={ propsTableHeader }
          />
        </Col>

        <Col md={ 12 }>
          <h4>
            Codígo
          </h4>
        </Col>

        <Col className="mb-5" md={ 8 }>
          <SyntaxHighlighter 
            language="tsx"
            style={ tomorrow } 
          > 
            { exampleCode }
          </SyntaxHighlighter>
        </Col>

        <Col md={ 12 }>
          <h4>
            Demo
          </h4>
        </Col>

        <Table 
          animate
          header={ 
            [
              new HeaderTable({
                key: 'name',
                label: 'Nombre',
                type: 'text',
                required: false,
                placeholder: 'Escribe aquí un nombre' 
              }),
              new HeaderTable({
                key: 'lastName',
                label: 'Apelluido',
                type: 'text',
                required: true,
                placeholder: 'Escribe aquí tu apelluido' 
              }),
              new HeaderTable({
                key: 'phoneNumber',
                label: 'Numero telefonico',
                type: 'number',
                required: true,
                placeholder: 'Escribe aquí tu apelluido' 
              }),
              new HeaderTable({
                key: 'email',
                label: 'Correo electronico',
                type: 'text',
                required: true,
                placeholder: 'Escribe aquí tu apelluido' 
              }),
              new HeaderTable({
                key: 'company',
                label: 'Compañia',
                type: 'text',
                required: true,
                placeholder: 'Escribe aquí tu apelluido' 
              }),
              new HeaderTable({
                key: 'address',
                label: 'Dirección',
                type: 'text',
                required: true,
                placeholder: 'Escribe aquí tu apelluido' 
              })
            ]
          }

          tableData={ dataTable }
          isLoad={ isLoading }
          
          noTableData="No hay datos para mostrar."

          search
          searchPlaceholder="Buscar..."
          noSearchResult="No se encontraron resultados."

          actionsLabel="Acciones"
          create
          edit
          drop

          onCreate={ (data: any) => {
            data.uid = key();
            this.firebase.update(`tableReactive/${data.uid}`, data);
          } }

          onEdit={ (data: any) => {
            this.firebase.update(`tableReactive/${data.uid}`, data);
          } }

          onDrop={ (elemet: any) => {  
            this.firebase.remove(`tableReactive/${elemet.uid}`);
            this.setState({ isLoading: true })
          }}

          pager
          showElements={ 10 }
          pageShow={ 11 }
          pageMessage="Mostrando desde $(init) hasta $(end) de $(length) registros"
        />
      </Row>
    );
  }
}

export default TableView;