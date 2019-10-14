import React from 'react';
import { Table, key } from 'reactive';

function App() {
  return (
    <div className="container">
      <Table 
        className="mt-5"
        variant=""
        isLoad={ false }
        loadColor="#00C6E1"
        header={ {
          name: {
            label: 'Nombre',
            type: String,
            required: true,
            placeholder: 'Nombre del usuario'
          },
          direccion: {
            label: 'Direccion',
            type: String,
            required: true,
            placeholder: 'Direccion bine hecha'
          },
          description:  {
            label: 'Descripcion',
            type: String,
            placeholder: 'Descripcion de genial'
          },
          total:  {
            label: 'Total',
            type: Number,
            required: true,
            placeholder: 'El total completo'
          }
        } }
        tableData={
          [
            {
              uid: key(),
              name: 'Juan rulfo',
              direccion: 'Platon 12',
              description: 'Es alto',
              total: 500
            },
            { 
              uid: key(),
              name: 'Juan rulfo 2',
              direccion: 'Platon 12',
              description: 'Es alto',
              total: 500
            },
            {
              uid: key(),
              name: 'Hola',
              direccion: 'Ñostra',
              description: 'Es alto',
              total: 500
            }
          ]
        } 

        actionsLabel="Acciones"
        noTableData="No hay datos para mostrar"

        drop
        edit
        create

        search
        searchPlaceholder="Buscar..."
        noSearchResult="No se encontraron resultados"

        onCreate={ (element) => { console.log(element) } }
        onEdit={ (element) => { console.log(element) }  }

        dropAlertTitle="Borrar elemento"
        dropAlertText="¿Deseas borrar el elemento ?"
        onDrop={ (element) => { console.log(element) } }
        
      />
    </div>
  );
}

export default App;
