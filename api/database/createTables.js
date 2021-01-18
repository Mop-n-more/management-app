import mysqlConnection from "./createConnection";

let userTable = `
  CREATE TABLE IF NOT EXISTS user (
    userId serial,
    firstName varchar(50) NOT NULL,
    lastName varchar(50) NOT NULL,
    password varchar(50) NOT NULL,
    email varchar(100) UNIQUE NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    INDEX(email)
  )
`

mysqlConnection.query(userTable, (error, results, fields) => {
  if (error) {
    throw error;
  }
  console.log("results: ", results)
})

