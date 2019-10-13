import React from 'react';
import { Table, toast, key } from 'reactive';

function App() {
  return (
    <div>
      {
        toast('success', 'vientos')
      }
      <Table 
        className="mt-5"
        header={ {
          name: {
            label: 'Nombre',
            type: String,
            required: true,
            mask: '',
            placeholder: 'Nombre del usuario'
          },
          direccion: {
            label: 'Direccion',
            type: String,
            required: true,
            mask: '',
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
            mask: '',
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

        search
        //searchPlaceholder="Buscar..."

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
