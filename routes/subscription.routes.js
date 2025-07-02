import { Router } from 'express';

export const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => {
   res.json({ title: 'GET all subscriptions' });
});

subscriptionRouter.get('/:id', (req, res) => {
   res.json({ title: 'GET subscription details' });
});

subscriptionRouter.post('/', (req, res) => {
   res.json({ title: 'CREATE subscription' });
});

subscriptionRouter.post('/:id', (req, res) => {
   res.json({ title: 'UPDATE subscription' });
});

subscriptionRouter.delete('/:id', (req, res) => {
   res.json({ title: 'DELETE subscription' });
});

subscriptionRouter.get('/user/:id', (req, res) => {
   res.json({ title: 'GET all user subscriptions' });
});

subscriptionRouter.put('/:id/cancel', (req, res) => {
   res.json({ title: 'CANCEL subscription' });
});

subscriptionRouter.get('/upcoming-renewals', (req, res) => {
   res.json({ title: 'GET upcoming renewals' });
});
