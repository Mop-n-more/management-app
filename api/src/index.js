import express from 'express';
import cors from 'cors';
import testAPI from './routes/testAPI';
import userRoutes from './routes/userRoutes';
import getList from './routes/getList';
// const testRoutes = require('./database/queries/test');

const app = express();

// app.use(testRoutes);
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(testAPI);
app.use(userRoutes);
app.use(getList);

app.get('/', (req, res) => {
  res.send('Hello world');
})




export default app;
