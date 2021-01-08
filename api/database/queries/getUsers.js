import express from 'express';
import mysqlConnection from '../createDatabase';

const router = express.Router();

router.get("/getUsers", async (req, res) => {
  try {
    await mysqlConnection.getConnection( async (err, connection) => {
      if (err) {
        throw err;
      }
      await mysqlConnection.query(
        'SELECT * FROM user', (err, results, fields) => {
          if (err) {
            console.error(err);
          }
          console.log(results);
          res.send(results);
        }
      )
      await connection.release();
      
    })
  } catch (error) {
    console.error(error);
  }
});

export default router;
