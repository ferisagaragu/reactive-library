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
        <Header>
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

        <div className="container">
          <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dictum eros in leo volutpat, sit amet viverra metus blandit. In ornare magna vitae orci condimentum, vel hendrerit sapien aliquet. Integer nec tempus erat, et pharetra nunc. In hac habitasse platea dictumst. Aliquam turpis magna, mattis sit amet urna at, semper cursus felis. Donec tincidunt porta nunc nec maximus. Nullam erat mauris, maximus ac gravida ut, porta quis elit. Vestibulum eleifend tellus vel varius varius. Aliquam feugiat, augue at ullamcorper pharetra, ligula velit porttitor diam, a accumsan sapien orci et metus. Praesent tempor magna sodales risus placerat, eu dignissim ex efficitur. Mauris tincidunt mauris libero, id pellentesque tortor congue in. Sed varius eu risus et facilisis. Etiam convallis id lacus in lobortis.

        Fusce sem tortor, aliquam ac tellus sit amet, commodo accumsan enim. Aliquam quam mi, faucibus sit amet tempor a, tristique pulvinar orci. Aliquam nec interdum lorem. Pellentesque et libero eget orci vehicula auctor eget et felis. Sed at eros congue, sagittis quam et, interdum nulla. Suspendisse elementum pulvinar massa a sodales. Nullam condimentum orci non ante molestie dapibus. Vivamus lacus justo, placerat vel mi id, iaculis pulvinar neque. Suspendisse facilisis ac diam vitae maximus. Quisque vitae est tellus. Integer egestas erat orci, et semper lorem molestie a. Sed sed felis vel dolor ultrices vulputate. Duis varius tempus mi, eget suscipit arcu placerat eu. Nam a massa augue.

        Donec scelerisque id ipsum sit amet ultricies. Duis pellentesque quam efficitur tempor pellentesque. Etiam sit amet ultrices ante. Vivamus vulputate, libero quis pharetra cursus, mauris tortor malesuada orci, quis viverra ante risus ut dolor. Etiam sed ante felis. Donec blandit euismod arcu, quis mattis augue pulvinar convallis. Cras iaculis, lacus sed euismod facilisis, justo mi ultricies massa, nec ullamcorper enim ante sed tellus. Aliquam eu tristique mauris, et consequat lorem. Sed varius in orci at bibendum. Suspendisse non turpis nec mauris pellentesque bibendum vel ac urna. Suspendisse id augue a lorem elementum venenatis vitae quis est.

        Quisque eget mauris ut arcu accumsan rutrum nec in neque. Cras hendrerit leo eget tellus cursus, eu consectetur felis fermentum. Vivamus vel felis vel elit mattis pellentesque. Phasellus mattis massa magna, quis congue nibh convallis luctus. Morbi id tristique ante. Suspendisse venenatis libero orci, ac sodales odio dapibus vitae. Praesent luctus, est ac rhoncus facilisis, nisi est maximus mi, vel molestie turpis dui nec urna. Suspendisse et suscipit lectus. Nunc consequat hendrerit pellentesque. Phasellus nec sem ut erat malesuada accumsan ac in elit. In in suscipit urna. Cras laoreet mollis urna at sagittis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In volutpat nunc at arcu hendrerit tincidunt. Aliquam laoreet nisl quis nunc suscipit, eget luctus enim mattis.

        Vestibulum quis sem quis leo pretium malesuada a eu massa. Sed auctor libero justo, vitae vehicula quam condimentum vitae. Pellentesque consectetur sodales gravida. Sed blandit dictum nisi, nec luctus eros sodales quis. Curabitur volutpat ullamcorper magna eu bibendum. Duis tortor libero, porta id dui vel, tempor viverra tortor. Vivamus et quam nec sapien egestas convallis nec in nisl. Fusce justo est, pellentesque vel mauris nec, mattis convallis quam. Maecenas aliquet, nisi nec blandit ultricies, risus risus auctor risus, quis rhoncus odio enim eget eros. Praesent rhoncus leo ac tincidunt egestas. Cras eget tincidunt velit. Pellentesque non fermentum leo, eu lobortis erat. Morbi semper enim felis, aliquam posuere tellus fermentum eget. Suspendisse quis neque libero. Sed eros ante, eleifend et dignissim vitae, bibendum sit amet risus. Proin finibus bibendum tempus.
        </p>
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