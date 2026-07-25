const express = require('express');
const router = express.Router();
const{ createProduct,getAllProducts ,getProductById, updateProduct ,deleteProduct , } = require('../controllers/product.controller');
const { CreateProductSchema ,UpdateProductSchema } = require('../validators/product.validator');
const validate = require('../middleware/validate.middleware');
const authMiddleware = require('../middleware/auth.middleware');
const {updateStock} = require('../controllers/product.controller');
const { updateStockSchema } = require('../validators/product.validator');
const { getLowStockProducts } = require('../controllers/product.controller');
const authorizeProduct = require("../middleware/authorizeProduct.middleware");




router.post('/' ,
     authMiddleware, 
     validate(CreateProductSchema), 
     createProduct);


router.get('/' ,
     authMiddleware,
     getAllProducts);

     router.get(
    "/low-stock",
    authMiddleware,
    getLowStockProducts
);

router.get('/:id' , 
    authMiddleware, 
    getProductById);


router.put('/:id' ,
     authMiddleware, 
    validate(UpdateProductSchema), 
    authorizeProduct,
    updateProduct);

router.delete(
    "/:id",

    authMiddleware,
    authorizeProduct,
    deleteProduct
);

router.patch(
    "/:id/stock",
    authMiddleware,
    authorizeProduct,
    validate(updateStockSchema),
    updateStock
);


module.exports = router;


