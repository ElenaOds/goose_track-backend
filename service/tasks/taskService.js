const { Tasks } = require('./taskSchema');

const addTask = async ({title, date, start, end, priority, column}, owner) => {
    return Tasks.create({ title, date, start, end, priority, column, owner });
}

const updateTask = async (taskId, body, owner) => {
    return Tasks.findByIdAndUpdate({  _id: taskId, owner }, body, { new: true });
}

const removeTask = async (taskId, owner) => {
    return Tasks.findByIdAndRemove({ _id: taskId, owner });
}

module.exports = {
    addTask,
    updateTask,
    removeTask,
}