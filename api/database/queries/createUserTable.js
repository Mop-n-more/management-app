import express from 'express';
import mysqlConnection from '../createDatabase';

const router = express.Router();

router.get('/createTable', async (req, res)  => {
  try {
    await mysqlConnection.getConnection( async (err, connection) => {
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
      await mysqlConnection.query(createTableQuery, (err, result) => {
        if (err) {
          throw err;
        }
        console.log("Table created \n results: ", result);
      })
      
      await connection.release();

  })
    
  } catch (error) {
    console.error(error);
  }
})

export default router;
