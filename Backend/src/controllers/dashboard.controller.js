const Product = require("../models/Product");
const Category = require("../models/Category");

const getDashboard = async (req, res) => {
    try {
        const userId = req.user.id;

        // Total Products
        const totalProducts = await Product.countDocuments({
            createdBy: userId,
        });

        // Categories are shared across all users
        const totalCategories = await Category.countDocuments();

        // Out of Stock Products
        const outOfStockProducts = await Product.countDocuments({
            createdBy: userId,
            quantity: 0,
        });

        // Low Stock Products
        const lowStockProducts = await Product.countDocuments({
            createdBy: userId,
            $expr: {
                $and: [
                    {
                        $gt: ["$quantity", 0],
                    },
                    {
                        $lte: ["$quantity", "$lowStockThreshold"],
                    },
                ],
            },
        });

        // Fetch all user's products
        const products = await Product.find({
            createdBy: userId,
        });

        // Calculate inventory value
        const totalInventoryValue = products.reduce((total, product) => {
            return total + product.price * product.quantity;
        }, 0);

        return res.status(200).json({
            success: true,
            data: {
                totalProducts,
                totalCategories,
                outOfStockProducts,
                lowStockProducts,
                totalInventoryValue,
            },
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

module.exports = {
    getDashboard,
};