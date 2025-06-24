import { Request, Response, NextFunction, RequestHandler } from 'express';
import Joi from 'joi';


export function validateWithJoi(schema: Joi.ObjectSchema): RequestHandler {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validatedBody = await schema.validateAsync(req.body, {
        abortEarly: false, 
        stripUnknown: true, 
      });
      req.body = validatedBody;
      next();
    } catch (error) {
      if (error instanceof Joi.ValidationError) {
        console.log('Validation error occurred for request body');
        const errorMessages = error.details.map(detail => {
          const field = detail.path.join('.');
          let message = '';
          switch (field) {
            case 'username':
              message = 'Username must be 3-20 characters long and contain only letters and numbers';
              break;
            case 'email':
              message = 'Please provide a valid email address';
              break;
            case 'password':
              message = 'Password must be at least 8 characters long and contain uppercase, lowercase, number, and symbol';
              break;
            default:
              message = `Invalid ${field}`;
          }
          return {
            field,
            message
          };
        });
        res.status(400).json({ 
          message: 'Validation failed',
          errors: errorMessages 
        });
        return;
      }
      next(error);
    }
  };
}
