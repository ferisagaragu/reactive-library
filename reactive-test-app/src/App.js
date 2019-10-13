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
            type: String,
            required: true,
            mask: '',
            placeholder: ''
          },
          direccion: {
            label: 'Direccion',
            type: String,
            required: true,
            mask: '',
            placeholder: ''
          },
          description:  {
            label: 'Descripcion',
            type: String,
            placeholder: ''
          },
          total:  {
            label: 'Total',
            type: Number,
            required: true,
            mask: '',
            placeholder: ''
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

        onEdit={ () => { } }

        dropAlertTitle="Borrar elemento"
        dropAlertText="¿Deseas borrar el elemento ?"
        onDrop={ (element) => { console.log(element) } }
        
      />
    </div>
  );
}

export default App;
