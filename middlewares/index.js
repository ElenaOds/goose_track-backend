const { addUserValidation } = require("./validation/addUserValidation");
const { loginUserValidation } = require("./validation/loginUserValidation");
const { authMiddleware } = require("./authMiddleware/authMiddleware");
const { uploadCloud } = require("./uploadMiddleware/uploadMiddleware");
const { addTaskValidation } = require("./validation/addTaskValidation");
const { updateTaskValidation } = require("./validation/updateTaskValidation");

module.exports = {
  addUserValidation,
  loginUserValidation,
  authMiddleware,
  addTaskValidation,
  updateTaskValidation,
  uploadCloud,
};
