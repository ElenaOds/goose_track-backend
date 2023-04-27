const Joi = require('joi');

const PASSWD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,20}$/;
// min 5 max 20 characters , 1 upper case letter, 1 lower case letter, 1 numeric digit

module.exports = {
    addUserValidation: (req, res, next) => {
        const schema = Joi.object({
            name: Joi.string()
                 .required(),
            email: Joi.string()
                .email({ tlds: { allow: false } })
                .required(),
            password: Joi.string()
                .min(5)
                .max(20)
                .regex(PASSWD_REGEX)
                .required(),
        });

    const validationResult = schema.validate(req.body);
        if (validationResult.error) {
            return res.status(400).json({ "message": ` ${validationResult.error}` });
        }
        next();
    }
}