const Category = require("../models/Category");

const createCategory = async (req, res) => {

    try {

        console.log("Controller reached");

        const { name, description } = req.body;

        const existingCategory = await Category.findOne({ name });

        if (existingCategory) {
            return res.status(400).json({
                success: false,
                message: "Category with this name already exists"
            });
        }

        const category = await Category.create({
            name,
            description
        });

        return res.status(201).json({
            success: true,
            message: "Category created successfully",
            category
        });

    } catch (err) {

        console.error(err);

        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });

    }

};




const getAllCategories = async (req, res) => {

    try {

        const categories = await Category.find()
            .sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            count: categories.length,
            categories
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });

    }

};

const getCategoryById = async (req, res) => {

    try {

        const { id } = req.params;

        const category = await Category.findById(id);

        if (!category) {
            return res.status(404).json({
                success: false,
                message: "Category not found"
            });
        }

        return res.status(200).json({
            success: true,
            category
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });

    }

};

const updateCategory = async (req, res) => {

    try {

        const { id } = req.params;

        const category = await Category.findById(id);

        if (!category) {
            return res.status(404).json({
                success: false,
                message: "Category not found"
            });
        }

        category.name = req.body.name ?? category.name;
        category.description = req.body.description ?? category.description;

        await category.save();

        return res.status(200).json({
            success: true,
            message: "Category updated successfully",
            category
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });

    }

};

const deleteCategory = async (req, res) => {

    try {

        const { id } = req.params;

        const category = await Category.findById(id);

        if (!category) {
            return res.status(404).json({
                success: false,
                message: "Category not found"
            });
        }

        await category.deleteOne();

        return res.status(200).json({
            success: true,
            message: "Category deleted successfully"
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });

    }

};

module.exports = { createCategory, getAllCategories, getCategoryById, updateCategory, deleteCategory };