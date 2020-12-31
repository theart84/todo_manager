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
  },
  create_at: {
    type: Number,
    default: Date.now
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);