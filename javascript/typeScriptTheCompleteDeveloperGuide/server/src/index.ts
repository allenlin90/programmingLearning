import express, { Request, Response, Errback } from 'express';
import { router } from './routes/loginRoutes';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

const app = express();

app.use(bodyParser.urlencoded({ extended: true })); // add body to request
app.use(cookieSession({ keys: ['abcdefg'] })); // add session to request
app.use(router);

app.get('/', (req: Request, res: Response) => {
  res.send(`
    <div>
      <h1>Hi there!</h1>
    </div>
  `);
});

app.listen(3000, () => {
  console.log(`Listening on port 3000`);
});
