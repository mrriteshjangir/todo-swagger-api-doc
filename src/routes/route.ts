import * as express from 'express';
const router=express.Router();

import * as Controller from '../controller/controller';

router.get('/todos',Controller.todos);
router.post('/todo',Controller.todo);

export default router;