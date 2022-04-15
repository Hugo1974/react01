import './compraItemTextEntry.css';

function CompraItemTextEntry({ readOnly }) {
  //   Boolean(ronly);

  console.log('RO: ' + readOnly);
  return (
    <div className='compraItemTextEntry'>
      <>
        <label htmlFor='name'>Name:</label>
        <input
          type='text'
          id='name'
          name='name'
          entrytext='True'
          readOnly={readOnly}
        />
      </>
    </div>
  );
}

export default CompraItemTextEntry;
