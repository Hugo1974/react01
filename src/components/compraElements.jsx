import './compraElements.css';
<<<<<<< Updated upstream
import CompraItem from './compraItem';

function CompraElements() {
=======
import { nmcliStatus } from '../packages/funciones';
import uuid from 'react-uuid';
import { v4 as uuidv4 } from 'uuid';

// import { useShell } from 'react-ssh2-hook';

// const { initShell, stream } = useShell({
//   // Pass an array of SSH2 ConnectConfig
//   config: [{ host: 'localhost', username: 'devel', password: 'cmQ84G24' }],
//   window: { term: 'xterm-256color' },
// });

function CompraElements() {
  const nmcli_status = [
    'wlo1:wifi:connected:Redmi 9',
    'docker0:bridge:connected:docker0',
    'eno1:ethernet:unavailable:',
    'lo:loopback:unmanaged',
  ];

  const rows = nmcliStatus(nmcli_status);
  const listItems = rows.map((rowsmap, index) => (
    <li key={uuidv4()}>
      <span>{rowsmap.device}</span>
      <span> {rowsmap.connection}</span>
    </li>
  ));

>>>>>>> Stashed changes
  return (
    <div className='compraElements'>
      <span>Elemento de compra</span>
      <div className='Items'>
        <CompraItem
          nombre='item 01'
          status='True'
          entry='True'
          readonly={true}
<<<<<<< Updated upstream
        />
        <CompraItem nombre='item 02' status='False' entry='False' />
        <CompraItem nombre='item 03' status='True' entry='False' />
        <CompraItem nombre='item 03' status='True' entry='False' />
        <CompraItem
          nombre='item 04'
          status='False'
          entry='True'
          readonly={false}
        />
=======
        /> */}
        <ul>{listItems}</ul>
>>>>>>> Stashed changes
      </div>
    </div>
  );
}

export default CompraElements;
