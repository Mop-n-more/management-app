import express from 'express';
const router = express.Router();

router.get('/testAPI', (req, res) => {
  res.send('api working correctly, status code: ' + res.statusCode);
})

export default router;
