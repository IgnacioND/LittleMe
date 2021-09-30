const User = require('../models/user.model');
const Task = require('../models/task.model');

async function createUser({ body }, res) {
  try {
    const newUser = await User.create(body);
    res.json(newUser);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
async function getUser({ params: { userId } }, res) {
  try {
    const foundUser = await User.findById(userId)
      .populate('tasks');
    res.json(foundUser);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
async function editUser({ params: { userId }, body: { points } }, res) {
  try {
    const foundUser = await User.findById(userId).populate('tasks');
    foundUser.little.appeareance = {
      ...foundUser?.little?.appeareance,
      ...points?.little?.appeareance,
    };
    foundUser.little.clothes = {
      ...foundUser?.little?.clothes,
      ...points?.little?.clothes,
    };
    foundUser.little.tendencies = {
      ...foundUser?.little?.tendencies,
      ...points?.little?.tendencies,
    };
    foundUser.little.stats = {
      ...foundUser?.little?.stats,
      ...points?.little?.stats,
    };

    foundUser.save();
    res.json(foundUser);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
async function deleteUser({ params: { userId } }, res) {
  try {
    const foundUser = await User.findByIdAndDelete(userId);
    res.json(foundUser);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  getUser,
  createUser,
  editUser,
  deleteUser,
};
