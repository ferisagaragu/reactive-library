import React from 'react';
import { key, toast, alert, Table, HeaderTable } from 'reactive';

const App: React.FC = () => {
  return (
    <div>
      { key() }
      { toast('success', 'Hola prro') }
      { alert('success', 'Hola', 'hola amigo') }
      <Table 
        header={ 
          [
            new HeaderTable({
              
            }),
            new HeaderTable({

            })
          ]
        }
        tableData={
          [

          ]
        }
      />
    </div>
  );
}

export default App;
