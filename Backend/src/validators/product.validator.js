const z = require("zod")

const CreateProductSchema = z.object({

name : z.string().min(3) ,
description : z.string().optional() ,
category : z.string().min(1) ,
price : z.number().min(0) ,
quantity : z.number().min(0) ,
sku : z.string().min(3) ,
lowStockThreshold: z.number().min(0).optional(),



})

const UpdateProductSchema = CreateProductSchema.partial()


module.exports = { CreateProductSchema , UpdateProductSchema }