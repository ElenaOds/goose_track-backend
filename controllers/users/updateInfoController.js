const { User } = require("../../service/users/userSchema");
const path = require("path");
const fs = require("fs/promises");
const Jimp = require("jimp");

const userPhotosDir = path.join(__dirname, "../../", "public", "userPhotos");

module.exports = {
  updateInfoController: async (req, res) => {
    const { _id } = req.user;
    const { name, email, phone, birthday, skype } = req.body;
    const { path: tempUpload, originalname } = req.file;
    const imgName = `${_id}_${originalname}`;
    try {
      const resultUpload = path.join(userPhotosDir, imgName);
      Jimp.read(tempUpload, (error, img) => {
        if (error) throw error;
        img.resize(124, 124).quality(60).write(resultUpload);
      });
      await fs.rename(tempUpload, resultUpload);
      const userPhotoURL = path.join("public", "userPhotos", imgName);
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
      await fs.unlink(tempUpload);
      throw error;
    }
  },
};
