const express = require('express');
const mysqlConnection = require('../database');

const Router = express.Router();

Router.get("/getUsers", (req, res) => {
  mysqlConnection.query(
    'SELECT * FROM users', (err, results, fields) => {
      if (!err) {
        res.send(results);
      }
      else {
        console.error(err);
      }
    }
  )
});


module.exports = Router;