const { User } = require("../../service/users/userSchema");

module.exports = {
    currentUserController: async (req, res) => {
        const {_id} = req.user;
        const user= await User.findById(_id);

        res.status(200).json({
            name: user.name,
            email: user.email,
            phone: user.phone,
            birthday: user.birthday,
            skype: user.skype,
            userPhoto: user.userPhoto,
            
        });
    }
}