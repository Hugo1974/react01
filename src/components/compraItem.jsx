import './compraElements';
import { FcOk } from 'react-icons/fc';
import { FcHighPriority } from 'react-icons/fc';
import { FcDeleteRow } from 'react-icons/fc';
import './compraItem.css';
import CompraItemTextEntry from './compraItemEntryText';

function CompraItem({ status, nombre, entry, readonly }) {
  console.log('STATUS:' + status);
  console.log('ENTRY:' + entry);

  function statusIcon(status) {
    console.log('statusIcon ' + status);
    if (status === 'True') {
      return <FcOk />;
    } else {
      return <FcHighPriority />;
    }
  }

  function hasEntry(entry) {
    console.log('hasEntry ' + entry);
    if (entry === 'True') {
      return <CompraItemTextEntry readOnly={readonly} />;
    } else {
      return;
    }
  }

  return (
    <div className='compraItem'>
      <span className='statusImg'>{statusIcon(status)}</span>
      <span className='nombre'>{nombre}</span>
      <span className='compraItemTextEntry'>{hasEntry(entry)}</span>
      <span className='closeImg'>
        <FcDeleteRow />
      </span>
    </div>
  );
}

export default CompraItem;
