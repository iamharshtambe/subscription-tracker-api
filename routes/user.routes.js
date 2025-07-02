import { Router } from 'express';

export const userRouter = Router();

userRouter.get('/', (req, res) => {
   res.json({ title: 'GET all users' });
});

userRouter.get('/:id', (req, res) => {
   res.json({ title: 'GET user details' });
});

userRouter.post('/', (req, res) => {
   res.json({ title: 'CREATE new user' });
});

userRouter.put('/:id', (req, res) => {
   res.json({ title: 'UPDATE user' });
});

userRouter.delete('/:id', (req, res) => {
   res.json({ title: 'DELETE user' });
});
