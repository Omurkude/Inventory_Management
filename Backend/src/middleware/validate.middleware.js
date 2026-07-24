function validate(schema) {

    return function (req, res, next) {

        const data = schema.safeParse(req.body);

        if (!data.success) {
            return res.status(400).json({
                success: false,
                message: "Validation Failed",
                errors: data.error.errors
            });
        }

        req.body = data.data;

        next();
    };

}

module.exports = validate;