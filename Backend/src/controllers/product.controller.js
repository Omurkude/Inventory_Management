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


const getAllProducts = async (req, res) => {
    try {
      const {search} = req.query;
      const filter = {}


      if(search){
        filter.name = { 
            $regex: search, 
            $options: 'i' };
      }

        const products = await Product.find(filter)
        .populate("createdBy", "name email")
        .sort({ createdAt: -1 });


        return res.status(200).json({
            success: true,
            products
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

const getProductById = async (req, res) => {
    try {
        const id = req.params;
        const product = await Product.findById(id)
            .populate("createdBy", "name email");

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

        res.status(200).json({
            success: true,
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
};
const updateProduct= async(req,res)=>{


    try{
        const product = req.product;
        product.name = req.body.name ?? product.name;
        product.description = req.body.description ?? product.description;
        product.category = req.body.category ?? product.category;
        product.price = req.body.price ?? product.price;
        product.quantity = req.body.quantity ?? product.quantity;
        product.sku = req.body.sku ?? product.sku;

        await product.save();

        res.status(200).json({
            success: true,
            message: "Product updated successfully",
            product
        });
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}

const deleteProduct = async (req, res) => {
    try {
    await req.product.deleteOne();
    res.status(200).json({
        success: true,
        message: "Product deleted successfully"
    });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct

}