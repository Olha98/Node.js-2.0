const { Router } = require('express');
const Joi = require('joi');
const { errCatch } = require('../helpers/errCatch');
const { validate } = require('../helpers/validate');
const UserController = require('./user.controller');
const userRouter = Router();

const createUserSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
});

const upDateUserSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
});

userRouter.get('/', UserController.getUsers);
userRouter.post('/', validate(createUserSchema), UserController.addUsers);
userRouter.put('/:id', validate(upDateUserSchema), UserController.upDateUsers);
userRouter.delete('/:id', UserController.deleteUsers);

module.exports = userRouter;
