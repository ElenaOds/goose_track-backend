const { tasksList } = require("../../service/tasks/taskService");


const getTasksController = async (req, res, next) => {
    const { _id: owner } = req.user;
    const { page = 1, limit = 20 } = req.query;

    const tasks = await tasksList(owner);
    res.status(200).json({tasks});
};

module.exports = { getTasksController };