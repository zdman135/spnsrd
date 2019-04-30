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
    required: true,
    unique: true
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
    default: "https://www.aj-chambers.com/front/images/default-user.jpg"
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

// create User
// create event

// delete User
// delete event

// update event
//   sponsor added or not true or false

// update event route
//   for user to update details

// update user route - to update profile information

// api route to reference to user and event collection
//   user is the parent object many relationship to events

// get 1 user

// get Event
// get 1 event
// get all events associated to 1 user 