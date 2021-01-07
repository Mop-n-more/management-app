import express from 'express';
const router = express.Router();


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

export default router;
