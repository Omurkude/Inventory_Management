const express = require('express');
const router = express.Router();
const { registerUser,loginUser } = require('../controllers/auth.controller');
const { RegisterSchema ,LoginSchema} = require('../validators/auth.validator');
const validate = require('../middleware/validate.middleware');

router.post('/register',validate(RegisterSchema), registerUser);
router.post('/login', validate(LoginSchema), loginUser);

module.exports = router;