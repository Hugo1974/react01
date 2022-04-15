import './compraElements.css';
import CompraItem from './compraItem';

function CompraElements() {
  return (
    <div className='compraElements'>
      <span>Elemento de compra</span>
      <div className='Items'>
        <CompraItem
          nombre='item 01'
          status='True'
          entry='True'
          readonly={true}
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
      </div>
    </div>
  );
}

export default CompraElements;
