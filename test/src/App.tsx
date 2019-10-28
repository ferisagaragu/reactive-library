import React, { Component } from 'react';
import { Table, HeaderTable, Firebase, convertJSONToArray, key, connect, Header } from 'reactive';

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
        <Header
          left={
            <div>
              Hola amigo
            </div>
          }
          center={
            <div>
              Hola amigo
            </div>
          }
          right={
            <div>
              <button>
                Cerrar cesión
              </button>
            </div>
          }
        >
          <h1>Esta es mi aplicacion</h1>
        </Header>

        <div className="container">
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
                  label: 'Apellido',
                  type: 'text',
                  required: true,
                  placeholder: 'Escribe aquí tu apellido' 
                }),
                new HeaderTable({
                  key: 'phoneNumber',
                  label: 'Numero telefonico',
                  type: 'number',
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

            onCreate={ (data: any) => {
              data.uid = key();
              this.firebase.update(`tableReactive/${data.uid}`, data);
            } }

            onEdit={ (data: any) => {
              console.log(data);
              this.firebase.update(`tableReactive/${data.uid}`, data);
            } }

            onDrop={ (elemet: any) => {  
              console.log(elemet);
              this.firebase.remove(`tableReactive/${elemet.uid}`);
              this.setState({ isLoading: true })
            }}

            pager
            showElements={ 10 }
            pageShow={ 11 }
            pageMessage="Mostrando desde $(init) hasta $(end) de $(length) registros"
          />
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);