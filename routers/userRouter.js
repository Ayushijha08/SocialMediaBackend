const express = require('express');
const userRegisterController = require('../controller/authController');

const userRouter = express.Router();

userRouter.post('/register', userRegisterController)

module.exports = userRouter