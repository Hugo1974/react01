import { useState } from 'react';
import './App.css';
import CompraElements from './components/compraElements';
import { hola } from './packages/funciones';

function App() {
  const [count, setCount] = useState(0);
  hola("Mundo cruel");
  return (
    <div className='App'>
      <CompraElements />
    </div>
  );
}

export default App;
