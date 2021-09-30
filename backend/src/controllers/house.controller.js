const House = require('../models/house.model');

async function createHouse({ body }, res) {
  try {
    const newHouse = await House.create(body);
    res.json(newHouse);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
async function getHouse({ params: { houseId } }, res) {
  try {
    const foundHouse = await House.findById(houseId);
    res.json(foundHouse);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
async function editHouse({ params: { houseId }, body }, res) {
  try {
    const foundHouse = await House.findByIdAndUpdate(houseId, body,
      {
        new: true,
        useFindAndModify: false,
      });
    res.json(foundHouse);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}
async function deleteHouse({ params: { houseId } }, res) {
  try {
    const foundHouse = await House.findByIdAndDelete(houseId);
    res.json(foundHouse);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  getHouse,
  createHouse,
  editHouse,
  deleteHouse,
};
