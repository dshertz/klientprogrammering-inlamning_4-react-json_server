import './transactions.css';

const Transaction = ({ transcation }) => {
  return (
    <>
      <li>
        <p className='datum'>{transcation.datum}</p>
      </li>
      <li key={transcation.id} className='transaction-container'>
        <p className='mottagare'>{transcation.mottagare}</p>
        <p className='belopp'>{transcation.belopp}</p>
        <p className='underkategori'>{transcation.underkategori}</p>
        <p className='huvudkategori'>{transcation.huvudkategori}</p>
      </li>
    </>
  );
};

export default Transaction;
