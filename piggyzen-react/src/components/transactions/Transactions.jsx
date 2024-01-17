import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Transaction from './Transaction';
import './transactions.css';

const Transactions = ({ transactions }) => {
  return (
    <main>
      <article>
        <section>
          <h2>Transaktioner</h2>
          <div className='container'>
            <Link to='/transactions/new'>
              <i className='new-transaction-btn'>Lägg till en transaktion</i>
            </Link>
          </div>
          <ul id='transactions-list'>
            {transactions.map((transaction) => (
              <Fragment key={transaction.id}>
                <Transaction transcation={transaction} />
              </Fragment>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
};

export default Transactions;
