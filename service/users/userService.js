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

    // const verificationCode = uuidv4();

    // const verification = new UserVerification({
    //     code: verificationCode,
    //     userId: createdUser._id,
    // })

    // await verification.save();

    // const msg = {
    //     to: email,
    //     from: 'sandbox.mailing@meta.ua',
    //     subject: 'Please, verify your email',
    //     text: 'Please, verify your email',
    //     html:`<h1>It is almost ready!</h1> <p>Please, go on this <a href="http://localhost:3000/users/verify/${verificationCode}">link</a> for completing the registration</p>`, 
    // }

    // await sgMail.send(msg);
    
    return createdUser;

}


const login = async (email, password) => {
    const user = await User.findOne({ email});

    if (!user || ! await bcrypt.compare(password, user.password)) {
        throw new NotAuthorizedError("Email or password is wrong");
    }

    // if (user.verify !== true) {
    //     throw new NotAuthorizedError("You need to confirm your registration");
    // }

 
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

    // registrationConfirmation,
    // resendingConfirmation
 
}