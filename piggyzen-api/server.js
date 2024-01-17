const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/1/transactions', async (req, res) => {
  //   const url = 'http://localhost:3000/transactions';
  const { data } = await axios.get(URL);
  //   const response = await fetch('http://localhost:3000/transactions');
  //   const data = await response.json();

  res.status(200).json(data);
});

app.post('/api/1/transactions', async (req, res) => {
  const body = req.body;
  console.log(body);

  const { data } = await axios.post(URL, body);
  res.status(201).json(data);
});

const PORT = 5020;
const URL = 'http://localhost:3000/transactions';

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
