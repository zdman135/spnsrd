const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  events: [Schema.Types.ObjectId],
  isSponsor: {
    type: Boolean,
    default: false,
    required: true
  },
  image: {
    type: String,
    required: true,
    //TODO: ADD DEFAULT NO USER IMAGE
  },
  age: {
    type: Number,
    min: 18,
    max: 200
  }
}, {id: true});

UserSchema.plugin(uniqueValidator);

const User = mongoose.model("users", UserSchema);

module.exports = User;
