const express = require('express');
const router = express.Router();
const authRouter = require('../Controllers/AuthController');

router.get('/login', authRouter.login);

router.get('/register', authRouter.register);

module.exports = router;