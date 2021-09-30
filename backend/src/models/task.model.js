const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
  name: String,
  description: String,
  deleted: Boolean,
  done: Boolean,
  creationDate: Date,
  limitDate: Date,
  importance: Number,
  class: String,
});

module.exports = mongoose.model('Task', taskSchema);
