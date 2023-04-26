const express = require("express");
const router = new express.Router();

const { asyncWrapper } = require("../../helpers/index");
const { authMiddleware, upload } = require("../../middlewares/index");

const {
  currentUserController,
  logoutController,
  updateInfoController,
} = require("../../controllers/index");

router.get("/current", authMiddleware, asyncWrapper(currentUserController));
router.post("/logout", authMiddleware, asyncWrapper(logoutController));
router.patch(
  "/info",
  authMiddleware,
  upload.single("userPhoto"),
  asyncWrapper(updateInfoController)
);

module.exports = { usersRouter: router };
