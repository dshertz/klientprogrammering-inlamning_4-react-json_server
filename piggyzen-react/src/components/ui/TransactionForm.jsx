import { Link } from 'react-router-dom';
import './transactionForm.css';

const TransactionForm = ({ onAddTransaction }) => {
  return (
    <div className='modal-container'>
      <form onSubmit={onAddTransaction}>
        <div>
          <Link to='/transactions'>
            <i className='close-btn fa-regular fa-circle-xmark fa-2xl'></i>
          </Link>
        </div>
        <div className='input-container'>
          <input type='text' name='date' placeholder='datum' />
          <small>yyyy-mm-dd</small>
        </div>
        <div className='input-container'>
          <input type='text' name='reciever' placeholder='mottagare' />
          <small>Ica</small>
        </div>
        <div className='input-container'>
          <input type='text' name='amount' placeholder='belopp' />
          <small>-123,00</small>
        </div>
        <div className='input-container'>
          <input type='text' name='subcategory' placeholder='underkategori' />
          <small>Livsmedel mm</small>
        </div>
        <div className='input-container'>
          <input type='text' name='maincategory' placeholder='huvudkategori' />
          <small>Övrigt - Rörliga</small>
        </div>
        <button type='submit'>Lägg till transaktion</button>
      </form>
    </div>
  );
};

export default TransactionForm;
