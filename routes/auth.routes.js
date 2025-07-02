import { Router } from 'express';

export const authRouter = Router();

authRouter.post('/signup', (req, res) => {
   res.json({ title: 'Sign up' });
});

authRouter.post('/signin', (req, res) => {
   res.json({ title: 'Sign in' });
});

authRouter.post('/signout', (req, res) => {
   res.json({ title: 'Sign out' });
});
