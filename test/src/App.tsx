import React from 'react';
import { key, toast, alert } from 'reactive';

const App: React.FC = () => {
  return (
    <div>
      { key() }
      { toast('success', 'Hola prro') }
      { alert('success', 'Hola', 'hola amigo') }
    </div>
  );
}

export default App;
