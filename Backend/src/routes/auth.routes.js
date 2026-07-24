const express = require('express');
const router = express.Router();
const { registerUser,loginUser,getcurrentUser } = require('../controllers/auth.controller');
const { RegisterSchema ,LoginSchema} = require('../validators/auth.validator');
const validate = require('../middleware/validate.middleware');
const authMiddleware = require('../middleware/auth.middleware');

router.post('/register',validate(RegisterSchema), registerUser);
router.post('/login', validate(LoginSchema), loginUser);
router.get('/me', authMiddleware,getcurrentUser);
module.exports = router;