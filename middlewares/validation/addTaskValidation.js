const Joi = require('joi').extend(require('@joi/date'));


module.exports = {
    addTaskValidation: (req, res, next) => {
        const schema = Joi.object({
            title: Joi.string().
            min(3)
            .max(250)
            .required(),
            date: Joi.date()
            .format('YYYY-MM-DD').required(),
            start: Joi.string().regex(/^([01]\d|2[0-3]):?([0-5]\d)$/).required(),
            end: Joi.string().regex(/^([01]\d|2[0-3]):?([0-5]\d)$/).required(),
            priority: Joi.string().valid("low", "medium", "high").required(),
            column: Joi.string().valid("To do", "In progress", "Done").required(),
        });

        const validationResult = schema.validate(req.body);
        if (validationResult.error) {
            return res.status(400).json({ "message": ` ${validationResult.error}` });
        }
        next();
    }
}

