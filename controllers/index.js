const { registrationController } = require("./users/registrationController");
const { loginController } = require("./users/loginController");
const { currentUserController } = require("./users/currentUserController");
const { logoutController } = require("./users/logoutController");

// const { uploadAvatarController } = require("./uploadAvatarController");
// const { verificationController } = require("./verificationController");
// const { resendingController } = require("./resendingController");


module.exports = {
    registrationController,
    loginController,
    currentUserController,
    logoutController

    
    // currentUserController,
    // uploadAvatarController,
    // verificationController,
    // resendingController
}