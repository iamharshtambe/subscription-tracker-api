import { Router } from 'express';
import {
   createSubscription,
   getUserSubscriptions,
} from '../controllers/subscription.controller.js';
import { authorize } from '../middlewares/auth.middleware.js';

export const subscriptionRouter = Router();

subscriptionRouter.post('/', authorize, createSubscription);

subscriptionRouter.get('/user/:id', authorize, getUserSubscriptions);
