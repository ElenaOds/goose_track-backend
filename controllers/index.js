const { registrationController } = require("./users/registrationController");
const { loginController } = require("./users/loginController");
const { currentUserController } = require("./users/currentUserController");
const { logoutController } = require("./users/logoutController");
const { updateInfoController } = require("./users/updateInfoController");
const { addTaskController } = require("./tasks/addTaskController");
const { updateTaskController } = require("./tasks/updateTaskController");
const { deleteTaskController } = require("./tasks/deleteTaskController");
const { getTasksController } = require("./tasks/getTasksController");

// const { verificationController } = require("./verificationController");
// const { resendingController } = require("./resendingController");

module.exports = {
  registrationController,
  loginController,
  currentUserController,
  logoutController,
  updateInfoController,
  addTaskController,
  updateTaskController,
  deleteTaskController,
  getTasksController,

  // currentUserController,
  // verificationController,
  // resendingController
};
