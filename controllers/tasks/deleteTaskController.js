const { removeTask } = require("../../service/tasks/taskService");


const deleteTaskController = async (req, res, next) => {
    const id = req.params.taskId;
    const { _id: owner } = req.user;
    
    await removeTask(id, owner);
    res.status(200).json({ "message": "task is deleted" });
};

module.exports = { deleteTaskController };