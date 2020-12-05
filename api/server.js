const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send("Hello world");
})

app.get('/testAPI', (req, res) => {
  res.send("api working correctly, status code: " + res.statusCode);
})

app.listen('8000', () => {
  console.log("listening on port 8000");
})