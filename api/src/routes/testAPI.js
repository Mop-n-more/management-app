import express from 'express';
const router = express.Router();

// prefix: /test/api

router.get('/', (req, res) => {
  res.send('api working correctly, status code: ' + res.statusCode);
})

// An api endpoint that returns a short list of items
router.get('/list', (req, res) => {
  const list = ['item1', 'item2', 'item3'];
  res.json(list);
  console.log('sent list of items');
})

export default router;
