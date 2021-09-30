const mongoose = require('mongoose');

const houseSchema = mongoose.Schema({
  location: [{
    name: Number,
    leftWall: Number,
    rightWall: Number,
    centerWall: Number,
    floor: Number,
    ceiling: Number,
    leftFurniture: Number,
    centerFurniture: Number,
    rightFurniture: Number,
    tidynessLevel: Number,
  }],
});

module.exports = mongoose.model('House', houseSchema);
