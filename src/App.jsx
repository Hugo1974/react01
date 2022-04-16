import { useState } from 'react';
import './App.css';
import CompraElements from './components/compraElements';
import { hola } from './packages/funciones';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function App() {
  const [count, setCount] = useState(0);
  hola();
  return (
    <div className='App'>
      <Tabs className='tab'>
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
        </TabList>
        <TabPanel>
          <CompraElements />
        </TabPanel>
        <TabPanel>
          <p>
            <b>Mario</b> (<i>Japanese: マリオ Hepburn: Mario, [ma.ɾʲi.o]</i>) (
            <i>English: /ˈmɑːrioʊ/; Italian: [ˈmaːrjo]</i>) is a fictional
            character
          </p>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default App;
