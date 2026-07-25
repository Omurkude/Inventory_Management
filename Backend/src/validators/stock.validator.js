const z = require("zod");

const updateStockSchema = z.object({

    type: z.enum(["IN", "OUT"]),

    quantity: z.number().int().positive()

});

module.exports = {
    updateStockSchema
};