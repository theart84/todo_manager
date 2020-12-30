const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  date: {
    type: String,
    default: Date.now
  },
  isCompleted: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);