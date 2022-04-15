import './compraElements.css';
import { nmcliStatus } from '../packages/funciones';
import uuid from 'react-uuid';

function CompraElements() {
  const nmcli_status = [
    'wlo1:wifi:connected:Redmi 9',
    'docker0:bridge:connected:docker0',
    'eno1:ethernet:unavailable:',
    'lo:loopback:unmanaged',
  ];

  const rows = nmcliStatus(nmcli_status);
  const listItems = rows.map((rowsmap, index) => (
    <li key={uuid()}>{rowsmap.device}</li>
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
        <ul>{listItems}</ul>
      </div>
    </div>
  );
}

export default CompraElements;
