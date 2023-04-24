const { updateTask } = require("../../service/tasks/taskService");

const updateTaskController = async (req, res, next) => {
    const { _id: owner } = req.user;

    const updatedTask = await updateTask(req.params.taskId, req.body, owner);
        if (!updatedTask) {
            res.status(404).json({ "message": `Task with id ${req.params.taskId} was not  found` });

        }
    res.status(200).json(updatedTask);

};

module.exports = { updateTaskController };