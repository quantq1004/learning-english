const router = require('express').Router();
const asyncMiddleware = require('../middlewares/async');
const { loginValidate, registerValidate } = require('../validations/auth');
const authController = require('../controllers/auth');

/* eslint-disable prettier/prettier */
router.post('/auths/register', registerValidate, asyncMiddleware(authController.register));
router.post('/auths/login', loginValidate, asyncMiddleware(authController.login));
/* eslint-enable prettier/prettier */

module.exports = router;
