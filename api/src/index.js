import express from 'express';
import cors from 'cors';
import testAPI from './routes/testAPI';
import userRoutes from './routes/user';
import '../database/createTables';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use('/api/v1', userRoutes);

// used for client to server testing purposes 
app.use('/test/api', testAPI);

app.get('/', (req, res) => {
  res.send('Hello world');
})

export default app;
