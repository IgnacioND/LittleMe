const mongoose = require('mongoose');

const littleSchema = mongoose.Schema({
  name: String,
  age: Number,
  evolution: Number,
  skin: Number,
  appeareance: {
    eyes: Number,
    mouth: Number,
    hair: Number,
    extra1: Number,
    extra2: Number,
    height: Number,
    width: Number,
  },
  money: Number,
  hunger: Number,
  hygiene: Number,
  mind: Number,
  clothes: {
    shirt: Number,
    pants: Number,
    shoes: Number,
  },
  tendencies: {
    studies: Number,
    healthiness: Number,
    leisure: Number,
  },
});

module.exports = mongoose.model('Little', littleSchema);
