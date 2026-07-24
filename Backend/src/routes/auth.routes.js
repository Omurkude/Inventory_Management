const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/auth.controller');
const { RegisterSchema } = require('../validators/auth.validator');
const validate = require('../middleware/validate.middleware');

router.post('/register',validate(RegisterSchema), registerUser);

module.exports = router;