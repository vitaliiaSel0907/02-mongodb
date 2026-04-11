import Joi from "joi";

//  REGISTER
export const registerUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});

//  LOGIN
export const loginUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

//  REQUEST RESET EMAIL
export const requestResetEmailSchema = Joi.object({
  email: Joi.string().email().required(),
});

//  RESET PASSWORD
export const resetPasswordSchema = Joi.object({
  token: Joi.string().required(),
  password: Joi.string().required(),
});