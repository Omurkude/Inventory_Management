const  Product = require("../models/Product");


const authorizeProduct = async (req, res, next) => {
    try {
        const productId = req.params.id;
        const product = await Product.findById(productId); 
    
    if (!product) {
        return res.status(404).json({
            success: false,
            message: "Product not found"
        });
    }

    if (product.createdBy.toString() !== req.user.id) {
        return res.status(403).json({
            success: false,
            message: "Forbidden: You are not authorized to perform this action"
        });
    }
    req.product = product;
    next();
}
        
        

   
    catch (err) {
    console.error(err);
    res.status(500).json({      
    success: false, 
    message: "Internal server error"
    });
}
}                   


module.exports = authorizeProduct;


