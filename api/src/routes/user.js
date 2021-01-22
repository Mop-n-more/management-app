import express from 'express';
import mysqlConnection from '../../database/createConnection'

const router = express.Router();

// prefix : /api/v1

router.post('/login', (req, res) => {
  const {email, password} = req.body;
  console.log(req.body);
  console.log(email, password);
  res.send(req.body)
})

router.post('/signup', (req, res) => {
  console.log(req.body);

  res.send(req.body); 
})

router.get("/users", async (req, res) => {
  try {
    await mysqlConnection.getConnection( async (err, connection) => {
      if (err) {
        throw err;
      }
      await connection.query(
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
    res.status(500).send("Internal Service Error!");
  }
});

export default router;
