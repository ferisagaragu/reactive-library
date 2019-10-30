import React, { Component } from 'react';
import { Row, Table, HeaderTable, Firebase, convertJSONToArray, key } from 'reactive';

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