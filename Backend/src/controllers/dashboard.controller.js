const Product = require("../models/Product");
const Category = require("../models/Category");

const getDashboard = async (req, res) => {

    try {

        const userId = req.user.id;

        const totalProducts = await Product.countDocuments({
            createdBy: userId
        });

        // Categories are shared across all users
        const totalCategories = await Category.countDocuments();

        const outOfStockProducts = await Product.countDocuments({
            createdBy: userId,
            quantity: 0
        });

        const lowStockProducts = await Product.countDocuments({
            createdBy: userId,
            $expr: {
                $and: [
                    {
                        $gt: ["$quantity", 0]
                    },
                    {
                        $lte: ["$quantity", "$lowStockThreshold"]
                    }
                ]
            }
        });

        const inventoryValue = await Product.aggregate([
            {
                $match: {
                    createdBy: userId
                }
            },
            {
                $group: {
                    _id: null,
                    total: {
                        $sum: {
                            $multiply: ["$price", "$quantity"]
                        }
                    }
                }
            }
        ]);

        return res.status(200).json({
            success: true,
            data: {
                totalProducts,
                totalCategories,
                outOfStockProducts,
                lowStockProducts,
                totalInventoryValue:
                    inventoryValue.length > 0
                        ? inventoryValue[0].total
                        : 0
            }
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
    getDashboard
};