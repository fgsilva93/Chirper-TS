//import * as express from 'express'; // a way to import this
import { Router } from 'express'; 
import chirpsRouter from './chirps'; 
const router = Router(); 

router.use('/chirps', chirpsRouter);

export default router; 
