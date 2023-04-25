const {addUserValidation } = require("./validation/addUserValidation");
const { loginUserValidation } = require("./validation/loginUserValidation");
const { authMiddleware } = require("./authMiddleware/authMiddleware");


module.exports= {
    addUserValidation,
    loginUserValidation,
    authMiddleware
 
}