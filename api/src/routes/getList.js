import express from 'express';
const router = express.Router();

// An api endpoint that returns a short list of items
router.get('/api/getList', (req, res) => {
  const list = ['item1', 'item2', 'item3'];
  res.json(list);
  console.log('sent list of items');
})

export default router;
