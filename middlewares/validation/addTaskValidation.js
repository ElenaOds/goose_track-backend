const Joi = require('joi');


module.exports = {
    addTaskValidation: (req, res, next) => {
        const schema = Joi.object({
            title: Joi.string().min(3).max(100).required(),
            start: Joi.string().regex(/^([01]\d|2[0-3]):?([0-5]\d)$/).required(),
            end: Joi.string().regex(/^([01]\d|2[0-3]):?([0-5]\d)$/).required(),
            priority: Joi.string().valid("low", "medium", "high").required(),
        });

        const validationResult = schema.validate(req.body);
        if (validationResult.error) {
            return res.status(400).json({ "message": ` ${validationResult.error}` });
        }
        next();
    }
}

