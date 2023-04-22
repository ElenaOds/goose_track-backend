const { registration} = require("../../service/users/userService");


module.exports = {
    registrationController: async (req, res)=> {
        const {
        name,
        email,
        password
    } = req.body;

    await registration(name, email, password);
    res.status(201).json({
        "message": "registration success"
    });
}
    
} 