const express = require("express");
const router = new express.Router();

const { asyncWrapper } = require("../../helpers/index");
const { authMiddleware, uploadCloud, updateUserValidation } = require("../../middlewares/index");

const {
  currentUserController,
  logoutController,
  updateInfoController,
} = require("../../controllers/index");

router.use(authMiddleware);

router.get("/current", asyncWrapper(currentUserController));
router.post("/logout", asyncWrapper(logoutController));
router.patch("/info",  updateUserValidation, uploadCloud.single("userPhoto"),
  asyncWrapper(updateInfoController)
);

module.exports = { usersRouter: router };
