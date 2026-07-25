const z = require("zod")
const createCategorySchema = z.object({
    name: z.string().min(3).trim(),
    description: z.string().optional(),
    parentCategory: z.string().optional(),
})

const updateCategorySchema = createCategorySchema.partial()

module.exports = { createCategorySchema, updateCategorySchema }