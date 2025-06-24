import { Router } from 'express';
import { createUser } from '../controllers/users.controller';
import { validateWithJoi } from '../validation/joi.validation.middleware';
import { createUserSchema } from '../validation/create-user.joi.schema';

const router = Router();
  
router.post('/users', 
  validateWithJoi(createUserSchema),
  createUser);

export default router; 