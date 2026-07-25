const Product = require("../models/Product");
const Category = require("../models/Category");

const createProduct = async (req, res) => {
    try {
        const { name, description, category, price, quantity, sku  ,lowStockThreshold} = req.body;

        const existingProduct = await Product.findOne({ sku });

        const categoryExists = await Category.findById(category);

        if (!categoryExists) {
            return res.status(404).json({
                success: false,
                message: "Category not found"
            });
        }


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
            lowStockThreshold,
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
      const {search ,category,sku,status } = req.query;
      const filter = {}


      if(search){
        filter.name = { 
            $regex: search, 
            $options: 'i' };
      }
      if(category){
        filter.category = category;
      }
      if (sku) {
    filter.sku = {
        $regex: sku,
        $options: "i"
    };
}
     if (status === "in-stock") {
    filter.quantity = {
        $gt: 0
    };
}

    if (status === "out-of-stock") {
        filter.quantity = 0;
    }
     
     if (status === "low-stock") {
            filter.$expr = {
                $and: [
                    {
                        $gt: ["$quantity", 0]
                    },
                    {
                        $lte: ["$quantity", "$lowStockThreshold"]
                    }
                ]
            };
        }




        const products = await Product.find(filter)
        .populate("createdBy", "name email")
        .populate("category", "name")
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
            .populate("createdBy", "name email")
            .populate("category", "name");
            

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
const updateProduct = async (req, res) => {

    try {

        const product = req.product;

        product.name = req.body.name ?? product.name;
        product.description = req.body.description ?? product.description;

        if (req.body.category) {

            const categoryExists = await Category.findById(req.body.category);

            if (!categoryExists) {
                return res.status(404).json({
                    success: false,
                    message: "Category not found"
                });
            }

            product.category = req.body.category;

        }

        product.price = req.body.price ?? product.price;
        product.quantity = req.body.quantity ?? product.quantity;
        product.sku = req.body.sku ?? product.sku;
        product.lowStockThreshold =
            req.body.lowStockThreshold ?? product.lowStockThreshold;

        await product.save();

        return res.status(200).json({
            success: true,
            message: "Product updated successfully",
            product
        });

    } catch (err) {

        console.error(err);

        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });

    }

};

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

const updateStock = async (req, res) => {

    try {

        const product = req.product;

        const { type, quantity } = req.body;

        if (type === "IN") {

            product.quantity += quantity;

        } else {

            if (product.quantity < quantity) {

                return res.status(400).json({
                    success: false,
                    message: "Insufficient stock"
                });

            }

            product.quantity -= quantity;

        }

        await product.save();

        return res.status(200).json({
            success: true,
            message: "Stock updated successfully",
            product
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });

    }

};

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    updateStock

}