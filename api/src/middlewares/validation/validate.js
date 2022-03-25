const validate = (schema) => async (req, res, next) => {
    try {
        console.log(req.body);
        await schema.validate({
            body: req.body,
        });
        return next();
    } catch (err) {
        return res.status(500).json({ type: err.name, message: err.message });
    }
};

module.exports = validate;
