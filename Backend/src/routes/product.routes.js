const express = require('express');
const router = express.Router();
const{ createProduct,getAllProducts ,getProductById, updateProduct} = require('../controllers/product.controller');
const { CreateProductSchema ,UpdateProductSchema } = require('../validators/product.validator');
const validate = require('../middleware/validate.middleware');
const authMiddleware = require('../middleware/auth.middleware');

router.post('/' , authMiddleware, validate(CreateProductSchema), createProduct);
router.get('/' , authMiddleware, getAllProducts);
router.get('/:id' , authMiddleware, getProductById);
router.put('/:id' , authMiddleware, validate(UpdateProductSchema), updateProduct);
module.exports = router;
