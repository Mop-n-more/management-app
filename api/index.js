import app from './src';
import 'dotenv/config';

try{
  app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`);
  })
}
catch(err) {
  console.log(err);
}
