const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { RegistrationConflictError, NotAuthorizedError } = require('../../helpers/index');
const { User } = require('./userSchema');



const registration = async (name, email, password) => {
    const user = await User.findOne({ email });
    
    if (user) {
        throw new RegistrationConflictError(`Email '${email}' is already in use`);
    }
    
    const createdUser = new User({
        name,
        email,
        password: await bcrypt.hash(password, 10)
    });
    await createdUser.save();

    const newUser = await User.findOne({ email });
    
    const token= jwt.sign({
        _id: newUser._id,
        createdAt: newUser.createdAt
    }, process.env.JWT_SECRET);

    const userData = { token, newUser };

    return userData;
}


const login = async (email, password) => {
    const user = await User.findOne({ email});

    if (!user || ! await bcrypt.compare(password, user.password)) {
        throw new NotAuthorizedError("Email or password is wrong");
    }

 
    const token= jwt.sign({
        _id: user._id,
        createdAt: user.createdAt
    }, process.env.JWT_SECRET);

    const userData = { token, user };

    return userData;
}




module.exports = {
    registration,
    login
 
}