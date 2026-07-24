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
        const products = await Product.find()
    .populate("createdBy", "name email")
    .sort({ createdAt: -1 });
        res.status(200).json({
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
        const {id} = req.params

        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, 
            { new: true ,
            runValidators: true
         }).populate("createdBy", "name email");

        if (!updatedProduct) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Product updated successfully",
            product: updatedProduct
        });

    }catch(err){
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}



module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct
}