const express = require("express");
const router = new express.Router();

const { asyncWrapper } = require("../../helpers/index");
const { authMiddleware } = require("../../middlewares/index");
const {
  currentUserController,
  logoutController,
  infoController,
} = require("../../controllers/index");

router.get("/current", authMiddleware, asyncWrapper(currentUserController));
router.post("/logout", authMiddleware, asyncWrapper(logoutController));
router.patch("/info", authMiddleware, asyncWrapper(infoController));

module.exports = { usersRouter: router };
