import React from 'react';
import { Table, HeaderTable, key } from 'reactive';

class ExampleData {
  uid: string;
  name: string;
  lastName: string;

  constructor(data: any | ExampleData) {
    this.uid = key();
    this.name = '';
    this.lastName = '';
    Object.assign(this, data);
  }
}

const App: React.FC = () => {
  return (
    <div>
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
            })
          ]
        }
        tableData={
          [
            new ExampleData({
              name: 'Fernando Isaías',
              lastName: 'Garcia Aguirre'
            }),
            new ExampleData({
              name: 'Pedro',
              lastName: 'Rodriges Martinez'
            }),
            new ExampleData({
              name: 'Panfilo',
              lastName: 'Anstencio Robles'
            })
          ]
        }
      />
    </div>
  );
}

export default App;
