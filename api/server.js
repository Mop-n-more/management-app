const express = require('express');
require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
  res.send("Hello world");
})

app.get('/testAPI', (req, res) => {
  res.send("api working correctly, status code: " + res.statusCode);
})

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
})

