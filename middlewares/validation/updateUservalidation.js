const Joi = require('joi').extend(require('@joi/date'));
const myCustomJoi = Joi.extend(require('joi-phone-number'));

const PASSWD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,20}$/;
// min 5 max 20 characters , 1 upper case letter, 1 lower case letter, 1 numeric digit

module.exports = {
    updateUserValidation: (req, res, next) => {
        const schema = Joi.object({
            name: Joi.string(),
            email: Joi.string()
                .email({ tlds: { allow: false } }),
            password: Joi.string()
                .min(5)
                .max(20)
                .regex(PASSWD_REGEX),
            phone: myCustomJoi.string().phoneNumber('+32494567324'),
            birthday: Joi.date()
                .format('DD-MM-YYYY'),
            skype: Joi.string()
                .min(1)
                .max(20),



            
        });

    const validationResult = schema.validate(req.body);
        if (validationResult.error) {
            return res.status(400).json({ "message": ` ${validationResult.error}` });
        }
        next();
    }
}