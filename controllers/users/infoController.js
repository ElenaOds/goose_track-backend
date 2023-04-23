const { User } = require("../../service/users/userSchema");

module.exports = {
  infoController: async (req, res) => {
    const { _id } = req.user;
    console.log(req.body);
    const { name, email, phone, birthday, skype, userPhoto } = req.body;
    await User.findByIdAndUpdate(_id, {
      name,
      email,
      phone,
      birthday,
      skype,
      userPhoto,
    });

    res.status(200).json({
      msg: "Update successful",
      user: {
        name,
        email,
        phone,
        birthday,
        skype,
        userPhoto,
      },
    });
  },
};
