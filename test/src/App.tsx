import React, { Component } from 'react';
import { Table, HeaderTable, Firebase, convertJSONToArray } from 'reactive';
import './table.css';

const reactRedux = require('react-redux');

class App extends Component<any, any> {
  
  firebase = new Firebase();

  constructor(props: any) {
    super(props);

    this.state = {
      dataTable: [],
      show: false,
      isLoading: true
    }
  }

  componentDidMount() {
    this.firebase.on('tableReactive',(data: any) => {
      this.setState({ dataTable: convertJSONToArray(data.val()), isLoading: false });
    });  
  }
  
  render() {
    const { dataTable } = this.state;

    return (
      <>
        <Table 
          animate
          header={ 
            [
              new HeaderTable({
                key: 'name',
                label: 'Nombre',
                type: 'text',
                required: true,
                placeholder: 'Escribe aquí un nombre' 
              }),
              new HeaderTable({
                key: 'lastName',
                label: 'Apellido',
                type: 'text',
                required: true,
                placeholder: 'Escribe aquí tu apellido' 
              }),
              new HeaderTable({
                key: 'phoneNumber',
                label: 'Numero telefonico',
                type: 'text',
                required: true,
                placeholder: 'Escribe aquí tu apellido' 
              }),
              new HeaderTable({
                key: 'email',
                label: 'Correo electronico',
                type: 'text',
                required: true,
                placeholder: 'Escribe aquí tu apellido' 
              }),
              new HeaderTable({
                key: 'company',
                label: 'Compañia',
                type: 'text',
                required: true,
                placeholder: 'Escribe aquí tu apellido' 
              }),
              new HeaderTable({
                key: 'address',
                label: 'Dirección',
                type: 'text',
                required: true,
                placeholder: 'Escribe aquí tu apellido' 
              })
            ]
          }

          tableData={ dataTable }
          isLoad={ dataTable.length === 0 }
          
          noTableData="No hay datos para mostrar."

          search
          searchPlaceholder="Buscar..."
          noSearchResult="No se encontraron resultados."

          actionsLabel="Acciones"
          create
          edit
          drop

          onDrop={ (elemet: any) => {  
            this.firebase.remove(`tableReactive/${elemet.uid}`);
            this.setState({ isLoading: true })
          }}

          pager
          pagerShowNumber={ 5 }
        />
      </>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    userData: state.userData
  }
};

const mapDispatchToProps = (dispatch: Function) => ({});

export default reactRedux.connect(mapStateToProps, mapDispatchToProps)(App);
