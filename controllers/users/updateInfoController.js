const { User } = require("../../service/users/userSchema");
const cloudinary = require('cloudinary').v2;

module.exports = {
  updateInfoController: async (req, res) => {
    const { _id, token } = req.user;
    const { body } = req;
  
    if (req.file) {
      const { path } = req.file;
  
      const fileName = path.split('/');
      const length = fileName.length;
  
      body.avatarURL = cloudinary.url(fileName[length - 1], {
        width: 200,
        height: 200,
        gravity: 'faces',
        crop: 'fill',
        quality: 'auto',
        fetch_format: 'jpg',
      });
    }
  
    const user = await User.findByIdAndUpdate(_id, body);
  
    res.status(200).json({
      token,
      user,
    });
  }
}

