const express = require('express');
const router = new express.Router();

const { addUserValidation,loginUserValidation} = require('../../middlewares/index');
const {registrationController,loginController} = require('../../controllers/index');
const { asyncWrapper } = require('../../helpers/index');


router.post('/register', addUserValidation, asyncWrapper(registrationController));
router.post('/login', loginUserValidation, asyncWrapper(loginController));







module.exports = {authRouter: router};
