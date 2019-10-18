import React, { Component } from 'react';
import { Table, HeaderTable, Firebase, Modal } from 'reactive';
import './table.css';

const reactRedux = require('react-redux');

class App extends Component<any, any> {
  
  firebase = new Firebase();

  constructor(props: any) {
    super(props);

    this.state = {
      dataTable: [],
      show: false
    }
  }

  componentDidMount() {
    this.firebase.once('tableReactive',(data: any) => {
      this.setState({ dataTable: data.val() });
      console.log(data.val());
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
          edit
          drop

          onDrop={ (elemet: any, index: number) => {  
            this.firebase.remove(`tableReactive/${index}`);
          }}
        />
      </>
    );
  }
}

const mapStateToProps = (state: any) => {
  console.log(state);
  return {
    userData: state.userData
  }
};

const mapDispatchToProps = (dispatch: Function) => ({});

export default reactRedux.connect(mapStateToProps, mapDispatchToProps)(App);
