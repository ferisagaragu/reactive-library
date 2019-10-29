import React, { Component } from 'react';
import { Table, HeaderTable, Firebase, convertJSONToArray, key, connect, Header, Footer, Tree, TreeElement } from 'reactive';

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
            <h3>
              Reactive
            </h3>
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
              data.uuid = key();
              this.firebase.update(`tableReactive/${data.uuid}`, data);
            } }

            onEdit={ (data: any) => {
              console.log(data);
              this.firebase.update(`tableReactive/${data.uuid}`, data);
            } }

            onDrop={ (elemet: any) => {  
              console.log(elemet);
              this.firebase.remove(`tableReactive/${elemet.uuid}`);
              this.setState({ isLoading: true })
            }}

            pager
            showElements={ 10 }
            pageShow={ 11 }
            pageMessage="Mostrando desde $(init) hasta $(end) de $(length) registros"
          />
        </div>

        <div className="container tree">
          <Tree 
            rootLabel={ <button>Inicio</button> }
            onClick={ (uid: string) => console.log(uid) }
            treeData={[
              new TreeElement({
                uid: key(),
                name: <h4>Pedro moreno</h4>,
                items: [
                  new TreeElement({
                    uid: key(),
                    name: <h5>Soy el bebe de pedro</h5>,
                    items: [
                      new TreeElement({
                        uid: key(),
                        name: <h6>Y yo el bebe del bebe de pedro</h6>
                      })
                    ]
                  })
                ]
              }),
              new TreeElement({
                uid: key(),
                name: <h4>Soy el hermano de Pedro</h4>,
                items: [
                  new TreeElement({
                    uid: key(),
                    name: <h5>Soy el hijo del hermano de Pedro</h5>
                  })
                ]
              })
            ]}
          />
        </div>

        <Footer>
          <h3>NeuroBrain</h3>
        </Footer>
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