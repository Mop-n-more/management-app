import express from 'express';
import cors from 'cors';
import testAPI from './routes/testAPI';
import userRoutes from './routes/userRoutes';
import getList from './routes/getList';
import getUsers from '../database/queries/getUsers';
import createUserTable from '../database/queries/createUserTable';

const app = express();

// app.use(testRoutes);
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(userRoutes);
app.use(getUsers);
app.use(createUserTable);

// these are both used for client to server testing purposes 
app.use(getList);
app.use(testAPI);

app.get('/', (req, res) => {
  res.send('Hello world');
})

export default app;
