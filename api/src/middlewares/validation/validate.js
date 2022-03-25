const validate = (schema) => async (req, res, next) => {
    return schema
        .validate({
            ...req.body,
        })
        .then(() => next())
        .catch((err) => {
            res.status(400).json({
                error: err.message,
            });
        });
};

module.exports = validate;
