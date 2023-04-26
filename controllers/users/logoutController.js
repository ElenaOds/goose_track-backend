const { User } = require("../../service/users/userSchema");

module.exports = {
    logoutController: async(req, res) => {
        const { _id: owner } = req.user;
            await User.findByIdAndUpdate( owner, { token: "" });

        res.status(200).json({
            message: "Logout success",
        });
    }
}