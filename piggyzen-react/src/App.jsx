import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import NavbarHeader from './components/shared/NavbarHeader';
import NavbarFooter from './components/shared/NavbarFooter';
import Home from './components/Home';
import Overview from './components/overview/Overview';
import Transactions from './components/transactions/Transactions';
import TransactionForm from './components/ui/TransactionForm';

import './assets/css/style.css';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const url = 'http://localhost:5020/api/1/transactions';

  useEffect(() => {
    const loadTransactions = async () => {
      const { data } = await axios.get(url);
      setTransactions(data);
    };
    loadTransactions();
  }, []);

  const onAddTransactionHandler = async (e) => {
    e.preventDefault();
    let transactionList = [];

    const datum = e.target.date.value;
    const mottagare = e.target.reciever.value;
    const belopp = e.target.amount.value;
    const underkategori = e.target.subcategory.value;
    const huvudkategori = e.target.maincategory.value;
    const newTransaction = {
      datum,
      mottagare,
      belopp,
      underkategori,
      huvudkategori,
    };

    const { data } = await axios.post(url, newTransaction);
    transactionList = [...transactions, data];
    setTransactions(transactionList);
  };

  return (
    <BrowserRouter>
      <NavbarHeader />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/overview' element={<Overview />}></Route>
        <Route
          path='/transactions'
          element={<Transactions transactions={transactions} />}
        ></Route>
        <Route
          path='/transactions/new'
          element={
            <TransactionForm onAddTransaction={onAddTransactionHandler} />
          }
        ></Route>
      </Routes>
      <NavbarFooter />
    </BrowserRouter>
  );
};

export default App;
