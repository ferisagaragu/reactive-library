import React, { Component } from 'react';
import { Table, HeaderTable, Firebase, Modal, convertJSONToArray } from 'reactive';
import './table.css';

const reactRedux = require('react-redux');

class App extends Component<any, any> {
  
  firebase = new Firebase();
  baseData: any = [];

  constructor(props: any) {
    super(props);

    this.state = {
      dataTable: [],
      show: false
    }
  }

  componentDidMount() {
    this.firebase.on('tableReactive',(data: any) => {
      this.baseData = convertJSONToArray(data.val());
      this.setState({ dataTable: convertJSONToArray(data.val()) });
    });  
  }
  
  render() {
    const { dataTable, show } = this.state;

    return (
      <>
        <Modal
          title="Hola amigo"
          modalShow={ show }
          onHide={ () => this.setState({ show: !show }) }
          size="xl"
        >
          <label>Hola amigos aqui estamos</label>
          <button>Si!!</button>
        </Modal>

        <button
          onClick={ () => this.setState({ show: true }) }
        >
          Modal
        </button>

        <Table 
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
          actionsLabel="AccionesAcciones"

          search
          edit
          drop

          onDrop={ (elemet: any) => {  
            this.firebase.remove(`tableReactive/${elemet.uid}`);
          }}

          onSearch={ (elements: Array<any>, searchText: string) => {
            this.setState({ dataTable: searchText === '' ? this.baseData : elements });
          }}
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
