import './compraElements.css';
import { nmcliStatus } from '../packages/funciones';

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
    <ul>
      <li>{rowsmap.device}</li>
    </ul>
  ));

  console.log('MAP: ' + listItems);

  return (
    <div className='compraElements'>
      <span>Elemento de compra</span>
      <div className='Items'>
        {/* <CompraItem
          nombre='item 01'
          status='True'
          entry='True'
          readonly={true}
        /> */}
        {listItems}
      </div>
    </div>
  );
}

export default CompraElements;
