const { registration} = require("../../service/users/userService");


module.exports = {
    registrationController: async (req, res)=> {
        const {
        name,
        email,
        password
    } = req.body;

       const{ token, newUser} = await registration(name, email, password);
        
    res.status(201).json({
        token,
        user: {
            name: newUser.name,
            email: newUser.email,

        }
    });
}
    
} 