import { useState } from 'react';
import './App.css';
import CompraElements from './components/compraElements';
import { hola } from './packages/funciones';
<<<<<<< Updated upstream
=======
import uuid from 'react-uuid';


function App() {
  const [count, setCount] = useState(0);

>>>>>>> Stashed changes


  
function App() {
  const [count, setCount] = useState(0);
<<<<<<< Updated upstream
  hola("Mundo cruel");
=======
  hola('Mundo cruel');

>>>>>>> Stashed changes
  return (
    <div className='App'>
      <CompraElements />
    </div>
  );
}

export default App;
