import { Request, Response } from 'express';
import usersService from '../services/users.service';
import { UserRequest } from '../models/users.types';

export const createUser = async (req: Request<unknown, unknown, UserRequest>, res: Response) => {
  try {
    const userResponse = await usersService.createUser(req.body);
    res.status(201).json({ message: 'User created successfully', userResponse });
  } catch (error) {
    res.status(500).json({ message: 'Could not create user', error });
  }
}; 