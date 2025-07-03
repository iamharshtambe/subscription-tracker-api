import express from 'express';
import { PORT } from '../config/env.js';
import { authRouter } from '../routes/auth.routes.js';
import { userRouter } from '../routes/user.routes.js';
import { subscriptionRouter } from '../routes/subscription.routes.js';
import { connectToDabatase } from '../database/db.js';
import cookieParser from 'cookie-parser';
import { errorMiddleware } from '../middlewares/error.middleware.js';

const app = express();

app.use(express.json());

app.use(cookieParser());

app.get('/', (req, res) => {
   res.send('Welcome to Subscription Tracker API');
});

app.use('/api/v1/auth', authRouter);

app.use('/api/v1/users', userRouter);

app.use('/api/v1/subscriptions', subscriptionRouter);

app.use(errorMiddleware);

app.listen(PORT, async () => {
   await connectToDabatase();
   console.log(
      `Subscription Tracker API is running on http://localhost:${PORT}`
   );
});
