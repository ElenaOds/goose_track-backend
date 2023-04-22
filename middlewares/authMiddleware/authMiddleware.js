const jwt = require('jsonwebtoken');
const { NotAuthorizedError } = require("../../helpers/index");
const { User } = require('../../service/users/userSchema');




const authMiddleware = async (req, res, next) => {
    if (!req.headers.authorization) {
        next(new NotAuthorizedError("Please, provide a token"));
    }
    try {
        const [bearer, token] = req.headers.authorization.split(' ');

        if (!token || bearer!== "Bearer") {
            next(new NotAuthorizedError('Not authorized-no valid token'));
        }
    
        const user = jwt.decode(token, process.env.JWT_SECRET);
        const existingUser = await User.findById(user._id);
     
    
        if (!existingUser) {
            next(new NotAuthorizedError('Not authorized user'));
        }

        req.user = existingUser;
        req.token = token;

        next();

    } catch (error) {
        next(new NotAuthorizedError('Invalid token'));

    }
}

module.exports = {
    authMiddleware
}