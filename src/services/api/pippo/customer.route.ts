console.log('caricato customer')


import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {

  res.send('customer');
});

export default  router ;