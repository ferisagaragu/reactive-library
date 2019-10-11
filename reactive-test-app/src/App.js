import React from 'react';
import { Table, toast, key } from 'reactive';

function App() {
  return (
    <div>
      {
        toast('success', 'vientos')
      }
      <Table 
        header={ {
          name: {
            label: 'Nombre',
            type: String
          },
          direccion: {
            label: 'Direccion',
            type: String
          },
          description:  {
            label: 'Descripcion',
            type: String
          },
          total:  {
            label: 'Total',
            type: Number
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
              name: 'Juan rulfo 3',
              direccion: 'Platon 12',
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
        //animated
        
        onCreate={ () => { console.log('action') } }

        dropAlertTitle="Borrar elemento"
        dropAlertText="¿Deseas borrar el elemento ?"
        onDrop={ (element) => { console.log(element) } }
        
      />
    </div>
  );
}

export default App;
