const Joi = require('joi');

module.exports = {
    updateTaskValidation: (req, res, next) => {
        const schema = Joi.object({
            title: Joi.string().min(3).max(250),
            start: Joi.string().regex(/^([01]\d|2[0-3]):?([0-5]\d)$/),
            end: Joi.string().regex(/^([01]\d|2[0-3]):?([0-5]\d)$/),
            priority: Joi.string().valid("low", "medium", "high"),
            column: Joi.string().valid("To do", "In progress", "Done")
        });

        const validationResult = schema.validate(req.body);
        if (validationResult.error) {
            return res.status(400).json({ "message": ` ${validationResult.error}` });
        }
    next();
    }
}