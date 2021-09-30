const Little = require('../models/little.model');

async function createLittle({ body }, res) {
  try {
    const newLittle = await Little.create(body);
    res.json(newLittle);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
async function getLittle({ params: { littleId } }, res) {
  try {
    const foundLittle = await Little.findById(littleId);
    res.json(foundLittle);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
async function editLittle({ params: { littleId }, body }, res) {
  try {
    const foundLittle = await Little.findByIdAndUpdate(littleId, body,
      {
        new: true,
        useFindAndModify: false,
      });
    res.json(foundLittle);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
async function deleteLittle({ params: { littleId } }, res) {
  try {
    const foundLittle = await Little.findByIdAndDelete(littleId);
    res.json(foundLittle);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  getLittle,
  createLittle,
  editLittle,
  deleteLittle,
};
