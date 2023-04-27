const Joi = require('joi');


module.exports = {
    loginUserValidation: (req, res, next) => {
        const schema = Joi.object({
            email: Joi.string()
                .email({ tlds: { allow: false } })
                .required(),
            password: Joi.string()
                .required(),
        });

    const validationResult = schema.validate(req.body);
        if (validationResult.error) {
            return res.status(400).json({ "message": ` ${validationResult.error}` });
        }
        next();
    }
}