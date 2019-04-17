const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
});

EventSchema.plugin(uniqueValidator);

const Event = mongoose.model("Event" , EventSchema);

module.exports = Event;