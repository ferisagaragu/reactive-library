import React from 'react';
import { Table } from 'reactive';
import './App.css';

function App() {
  return (
    <div>
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
            name: 'Juan rulfo',
            direccion: 'Platon 12',
            description: 'Es alto',
            total: 500
          },
          { 
            name: 'Juan rulfo 2',
            direccion: 'Platon 12',
            description: 'Es alto',
            total: 500
          },
          {
            name: 'Juan rulfo 3',
            direccion: 'Platon 12',
            description: 'Es alto',
            total: 500
          }
        ]
      } 
      actionsLabel="Acciones"
      erase
      edit
      create
    />
    </div>
  );
}

export default App;
