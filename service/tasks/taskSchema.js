const mongoose = require("mongoose");

const tasksSchema = new mongoose.Schema( {
    title: {
      type: String,
      required: [true, 'Type text'],
    },
    date: {
      type: Date,
      required: true,
    },
    start: {
      type: String,
      required: [true, 'Please choose start time'],
    },
    end: {
      type: String,
      required: [true, 'Please choose end time'],
    },
    priority: {
      type: String,
      enum: ['low', 'medium', 'high'],
      required: [true, 'Please choose the priority'],
    },
    column: {
      type: String,
      enum: ['To do', 'In progress', 'Done'],
      default: 'To do',
    },
    owner: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "user",
    }
},

{ versionKey: false, timestamps: true},
);

  
const Tasks = mongoose.model('tasks', tasksSchema);

module.exports = {
  Tasks
};