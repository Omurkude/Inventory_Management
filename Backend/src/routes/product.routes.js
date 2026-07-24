const express = require('express');
const router = express.Router();
const{ createProduct } = require('../controllers/product.controller');
const { CreateProductSchema } = require('../validators/product.validator');
const validate = require('../middleware/validate.middleware');
const authMiddleware = require('../middleware/auth.middleware');

router.post('/' , authMiddleware, validate(CreateProductSchema), createProduct);
module.exports = router;