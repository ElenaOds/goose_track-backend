const { User } = require("../../service/users/userSchema");

module.exports = {
  updateInfoController: async (req, res) => {
    const { _id } = req.user;
    const { name, email, phone, birthday, skype } = req.body;
    let userPhotoURL;
    try {
      if (req.file) {
        userPhotoURL = req.file.path;
      }

      await User.findByIdAndUpdate(_id, {
        name,
        email,
        phone,
        birthday,
        skype,
        userPhoto: userPhotoURL,
      });

      res.status(200).json({
        msg: "Update successful",
        user: {
          name,
          email,
          phone,
          birthday,
          skype,
          userPhoto: userPhotoURL,
        },
      });
    } catch (error) {
      throw error;
    }
  },
};