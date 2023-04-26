const { Tasks } = require("../../service/tasks/taskSchema")

const getTasksController = async (req, res, next) => {
    const { _id: owner } = req.user;
    const {dateFrom, dateTo } = req.query;
   
    const tasks =  await Tasks.find({ owner, date: {$gte: dateFrom, $lte: dateTo}});

    res.status(200).json({tasks});
};

module.exports = { getTasksController };