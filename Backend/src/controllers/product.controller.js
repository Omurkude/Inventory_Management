const Product = require("../models/Product");


const createProduct = async (req, res) => {
    try {
        const { name, description, category, price, quantity, sku } = req.body;

        const existingProduct = await Product.findOne({ sku });


        if(existingProduct){
            return res.status(400).json({
                success: false,
                message: "Product with this SKU already exists"
            });
        }

        const product = await Product.create({
            name,
            description,
            category,
            price,
            quantity,
            sku,
            createdBy: req.user.id
        });

        res.status(201).json({
            success: true,
            message: "Product created successfully",
            product
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }

}
module.exports = {
    createProduct
}