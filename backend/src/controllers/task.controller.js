/* eslint-disable no-underscore-dangle */
const Task = require('../models/task.model');
const User = require('../models/user.model');

async function createTask({ body: { body }, params: { userId } }, res) {
  try {
    const newTask = await Task.create(body);
    const foundUser = await User.findByIdAndUpdate(userId,
      { $push: { tasks: newTask._id } }, { new: true });
    res.json(foundUser);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
async function getTask({ params: { taskId } }, res) {
  try {
    const foundTask = await Task.findById(taskId);
    res.json(foundTask);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
async function editTask({ params: { taskId }, body }, res) {
  try {
    const foundTask = await Task.findByIdAndUpdate(taskId, body,
      {
        new: true,
        useFindAndModify: false,
      });
    res.json(foundTask);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
async function deleteTask({ params: { taskId } }, res) {
  try {
    const foundTask = await Task.findByIdAndUpdate(taskId,
      {
        $set: {
          deleted: true,
        },
      }, { new: true });
    res.json(foundTask);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
async function doneTask({ params: { taskId } }, res) {
  try {
    const foundTask = await Task.findByIdAndUpdate(taskId,
      {
        $set: {
          done: true,
        },
      }, { new: true });
    res.json(foundTask);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  getTask,
  createTask,
  editTask,
  deleteTask,
  doneTask,
};
