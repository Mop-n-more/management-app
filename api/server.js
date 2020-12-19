const express = require('express');
const mysqlConnection = require('./database/database');
require('dotenv').config();

const app = express();

// middleware for allowing react to fetch() from server
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

app.get('/', (req, res) => {
  res.send('Hello world');
})

app.get('/testAPI', (req, res) => {
  res.send('api working correctly, status code: ' + res.statusCode);
})

// An api endpoint that returns a short list of items
app.get('/api/getList', (req, res) => {
  const list = ['item1', 'item2', 'item3'];
  res.json(list);
  console.log('sent list of items');
})

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
})

