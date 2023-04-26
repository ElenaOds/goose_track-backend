const { addTask } = require("../../service/tasks/taskService");

const addTaskController = async (req, res, next) => {
    const { _id: owner } = req.user;
    
    const newTask = await addTask(req.body, owner);
    
    res.status(201).json(newTask);
};

module.exports = { addTaskController };