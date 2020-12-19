const mysql = require('mysql');
require('dotenv').config();

const mysqlConnection = mysql.createConnection({
  host : process.env.MYSQL_HOST,
  user : process.env.MYSQL_USER,
  password : process.env.MYSQL_PASSWORD
});

mysqlConnection.connect( err => {
  if (err) {
    console.error('error connecting: ', err.stack);
    return;
  }

  console.log('connected as id ', mysqlConnection.threadId);
})

