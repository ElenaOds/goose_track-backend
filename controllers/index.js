const { registrationController } = require("./users/registrationController");
const { loginController } = require("./users/loginController");
const { currentUserController } = require("./users/currentUserController");
const { logoutController } = require("./users/logoutController");
const { infoController } = require("./users/infoController");
const { addTaskController } = require("./tasks/addTaskController");
const { updateTaskController } = require("./tasks/updateTaskController");
const { deleteTaskController } = require("./tasks/deleteTaskController");
const { getTasksController } = require("./tasks/getTasksController");


// const { uploadAvatarController } = require("./uploadAvatarController");
// const { verificationController } = require("./verificationController");
// const { resendingController } = require("./resendingController");

module.exports = {
  registrationController,
  loginController,
  currentUserController,
  logoutController,
  infoController,
  addTaskController,
  updateTaskController,
  deleteTaskController,
  getTasksController
  
  // uploadAvatarController,
  // verificationController,
  // resendingController
};
