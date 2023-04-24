// const express = require("express");
// const router = new express.Router();

// const { asyncWrapper } = require("../../helpers/index");
// const { addTaskMiddleware } = require("../../middlewares/index");
// const { addTaskController } = require("../../controllers/index");

// router.use(authMiddleware);

// router.get("/", asyncWrapper());
// router.post("/", asyncWrapper(addTaskController));
// router.patch("/:id", asyncWrapper());
// router.delete('/:id', asyncWrapper());

// module.exports = { tasksRouter: router };
const express = require('express');

const { addTaskController, updateTaskController, deleteTaskController, getTasksController } = require('../../controllers/index');

const { asyncWrapper } = require("../../helpers/index");

const { authMiddleware, addTaskValidation, updateTaskValidation } = require("../../middlewares/index");

const router = express.Router();

router.use(authMiddleware);

router.get('/', asyncWrapper(getTasksController));
router.post('/', addTaskValidation, asyncWrapper(addTaskController));
router.patch('/:taskId', updateTaskValidation, asyncWrapper(updateTaskController));
router.delete('/:taskId', asyncWrapper(deleteTaskController));

module.exports = { tasksRouter: router };