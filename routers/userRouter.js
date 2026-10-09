const express = require('express');
const {userRegisterController, loginController, logoutController} = require('../controller/authController');

const userRouter = express.Router();

userRouter.post('/register', userRegisterController)
            .post('/login', loginController)
            .get('/logout', logoutController)
module.exports = userRouter