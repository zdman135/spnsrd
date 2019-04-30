const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: new Date("June 16, 2006 0:00:01") //Tokyo Drift Release Date
    },
    location: {
        type: String,
        required: true
    },
    shortText: {
        type: String,
        required: true
    },
    longText: {
        type: String
    },
    category: {
        type: String,
        required: true
    },
    isSponsored: {
        type: Boolean,
        default: false,
        required: true
    },
    sponsors: [Schema.Types.ObjectId],
    createdBy: {
        type: Schema.Types.ObjectId, 
        ref: "User",
        required: true
    },
    image: {
        type: String,
        required: true,
        default: "https://www.aj-chambers.com/front/images/default-user.jpg"
      }

}, {id: true});

EventSchema.plugin(uniqueValidator);

const Event = mongoose.model("Event" , EventSchema);

module.exports = Event;