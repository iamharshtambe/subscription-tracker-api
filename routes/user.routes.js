import { Router } from 'express';
import { getUser, getUsers } from '../controllers/user.controller.js';

export const userRouter = Router();

userRouter.get('/', getUsers);

userRouter.get('/:id', getUser);

userRouter.post('/', (req, res) => {
   res.json({ title: 'CREATE new user' });
});

userRouter.put('/:id', (req, res) => {
   res.json({ title: 'UPDATE user' });
});

userRouter.delete('/:id', (req, res) => {
   res.json({ title: 'DELETE user' });
});
