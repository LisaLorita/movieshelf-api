import Joi from "joi";

export const createUserSchema = Joi.object({
  username: Joi.string()
    .alphanum()
    .min(3)
    .max(20)
    .required(),
  email: Joi.string()
    .email()
    .lowercase()
    .required(),
  createdAt: Joi.date()
    .default(Date.now),
  updatedAt: Joi.date()
    .default(Date.now),
  password: Joi.string()
    .min(8)
    .required()
    .regex(/[A-Z]+/, 'uppercase')
    .regex(/\d+/, 'number')
    .regex(/[\W_]+/, 'symbol')
})
