const mysql = require('mysql');
require('dotenv').config();

const mysqlConnection = mysql.createPool({
  connectionLimit: 10,
  host : process.env.MYSQL_HOST,
  user : process.env.MYSQL_USER,
  password : process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB
});

mysqlConnection.getConnection( err => {
  if (err) {
    console.error('error connecting: ', err.stack);
    return;
  }

  console.log('connected as id ', mysqlConnection.threadId);
})

mysqlConnection.getConnection(err => {
  if (err) {
    throw err;
  }
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS user(
      userId serial,
      firstName varchar(50) NOT NULL,
      lastName varchar(50) NOT NULL,
      email varchar(100) UNIQUE NOT NULL,
      password varchar(50) NOT NULL,
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
    );
  `;
  mysqlConnection.query(createTableQuery, (err, result) => {
    if (err) {
      throw err;
    }
    console.log("Table created \n results: ", result);
  })
})

module.exports = mysqlConnection;
