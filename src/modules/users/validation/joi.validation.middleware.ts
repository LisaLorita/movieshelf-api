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
        const errorMessages = error.details.map(detail => ({
          message: detail.message.replace(/['"]/g, ''),
          path: detail.path.join('.'),
        }));
        res.status(400).json({ errors: errorMessages });
      }
      next(error);
    }
  };
}
