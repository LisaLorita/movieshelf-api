import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import usersRoutes from './modules/users/routes/users.routes';

dotenv.config();

const app = express();

app.use(express.json());
app.use('/api', usersRoutes);

app.get('/', (req: Request, res: Response) => {
  console.log('Hello World!');
  res.send('Hello World!');
});

export default app;