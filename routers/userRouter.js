const express = require('express');
const {userRegisterController, loginController} = require('../controller/authController');

const userRouter = express.Router();

userRouter.post('/register', userRegisterController)
            .post('/login', loginController)

module.exports = userRouter