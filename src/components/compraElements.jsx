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
    <div key={uuid()} className='divDeviceStatus'>
      <span className='device, status'>{rowsmap.device}</span>
      <span className='type, status'>{rowsmap.type}</span>
      <span className='state, status'>{rowsmap.state}</span>
      <span className='conecction, status'>{rowsmap.connection}</span>
    </div>
  ));

  console.log('MAP: ' + listItems);

  return (
    <>
      <span className='titulo'>Estado de los dispositivos de red</span>
      <div key={uuid()} className='divDeviceStatus'>
        <span className='device, status, cabecera'>Dispositivo</span>
        <span className='device, status cabecera'>Tipo</span>
        <span className='device, status cabecera'>Estado</span>
        <span className='device, status cabecera'>Conexión</span>
      </div>
      <div className='Items'>{listItems}</div>
    </>
  );
}

export default CompraElements;
