const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const Event = require("../../models/Event");

router.get("/", (req, res) => {
    Event.find({}, (err, events) => {
        res.send(events)
    });
});

router.get("/:eventId", (req, res) => {
    if (mongoose.Types.ObjectId.isValid(req.params.eventId)) {
        Event.findOne({ '_id': req.params.eventId }).then(event => {
            if (!event) {
                return res.status(404).json({ event: "Event was not found." });
            }
            return res.status(200).json(event)
        });
    } else {
        return res.status(404).json({ event: "Invalid Event Id was attempted" })
    }
});

router.post("/createevent", (req, res) => {
    const newEvent = new Event({
        name: req.body.name,
        location: req.body.location,
        shortText: req.body.shortText,
        longText: req.body.longText,
        category: req.body.category,
        isSponsored: req.body.isSponsored,
        createdBy: req.body.email,
        image: req.body.image
    });

    newEvent.save().then(event => res.json(event)).catch(err => console.log(err));
});

router.put("/:eventId", (req, res) => {
    if (mongoose.Types.ObjectId.isValid(req.params.eventId)) {
        Event.findOneAndUpdate({_id: req.params.eventId}, { $set: req.body }, (err, doc) => {
            if (err) return res.send(500, { error: err });
            return res.send("Event Successfully Saved");
        });
    } else {
        return res.status(404).json({ event: "Invalid Event Id was attempted" })
    }
});

router.delete("/:eventId", (req, res) => {
if (mongoose.Types.ObjectId.isValid(req.params.eventId)) {
        Event.deleteOne({ '_id': req.params.eventId }, err => {
            if (err) return handleError(err);
            return res.send("Event Successfully Deleted.");
        });
    } else {
        return res.status(404).json({ event: "Invalid Event Id was attempted" })
    }
})

module.exports = router;
