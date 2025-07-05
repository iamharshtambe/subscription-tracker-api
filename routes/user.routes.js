import { Router } from 'express';
import { getUser, getUsers } from '../controllers/user.controller.js';
import { authorize } from '../middlewares/auth.middleware.js';

export const userRouter = Router();

userRouter.get('/', getUsers);

userRouter.get('/:id', authorize, getUser);
