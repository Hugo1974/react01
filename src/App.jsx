import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CompraElements from './components/compraElements';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <CompraElements />
    </div>
  );
}

export default App;
