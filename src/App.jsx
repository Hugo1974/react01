import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CompraElements from './components/compraElements';
<<<<<<< Updated upstream

function App() {
  const [count, setCount] = useState(0);

=======
import { hola } from './packages/funciones';
import uuid from 'react-uuid';

function App() {
  const [count, setCount] = useState(0);
  hola('Mundo cruel');
>>>>>>> Stashed changes
  return (
    <div className='App' key={uuid()}>
      <CompraElements key={uuid()} />
    </div>
  );
}

export default App;
