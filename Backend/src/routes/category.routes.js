const express = require("express");
const router = express.Router();
const {createCategory ,getAllCategories ,getCategoryById ,updateCategory,deleteCategory} = require("../controllers/category.controller");
const validate = require("../middleware/validate.middleware");
const authMiddleware = require("../middleware/auth.middleware");
const { createCategorySchema } = require("../validators/category.validators");
const { updateCategorySchema } = require("../validators/category.validators");

router.post("/",
     authMiddleware,
     validate(createCategorySchema),
     createCategory);

router.get("/",
     authMiddleware,
     getAllCategories);

router.get("/:id",
     authMiddleware,
     getCategoryById);

 router.put(
    "/:id",
    authMiddleware,
    validate(updateCategorySchema),
    updateCategory
); 

router.delete("/:id",
    authMiddleware,
    deleteCategory
);

module.exports = router;