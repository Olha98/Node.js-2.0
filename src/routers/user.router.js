const express = require('express')
const UserController = require('../controllers/user.controller')
const userRouter = express.Router();

userRouter.get('/', UserController.getUsers)
userRouter.get('/', UserController.createUsers);
module.exports = userRouter