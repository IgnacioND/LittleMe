const { Schema, model } = require('mongoose');
const md5 = require('md5');

const userSchema = new Schema({
  name: String,
  username: String,
  email: String,
  password: String,
  little: {
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
    stats: {
      money: Number,
      hunger: Number,
      hygiene: Number,
      mind: Number,
    },
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
  },
  house: [{
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
  tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }],
});

userSchema.methods.isValidPassword = function isValidPassword(password) {
  return md5(password) === this.password;
};
module.exports = model('User', userSchema);
