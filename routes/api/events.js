const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const Event = require("../../models/Event");

router.get("/", (req, res) => {
    if (req.query.sponsorship !== undefined) {
        let isSponsored = req.query.sponsorship

        Event.find({ 'isSponsored': isSponsored }).then(event => {
            return res.status(200).json(event)
        })
    } else if (req.query.category !== undefined) {
        let category = req.query.category

        Event.find({ 'category': category }).then(event => {
            return res.status(200).json(event)
        })
    } else if (req.query.date === '1week') {
        Event.find({ 'date': {
            $gte: Date.now(),
            $lte: Date.now() + 6.04e+8} 
        }).then(event => {
            return res.status(200).json(event)
        })
    } else {
        Event.find({}, (err, events) => {
            res.send(events)
        });
    }
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
        date: req.body.date,
        name: req.body.name,
        location: req.body.location,
        shortText: req.body.shortText,
        longText: req.body.longText,
        category: req.body.category,
        isSponsored: req.body.isSponsored,
        createdBy: req.body.userId,
        image: req.body.image
    });

    newEvent.save().then(event => res.json(event)).catch(err => console.log(err));
});

router.put("/:eventId", (req, res) => {
    if (mongoose.Types.ObjectId.isValid(req.params.eventId)) {
        Event.findOneAndUpdate({ '_id': req.params.eventId }, { $set: req.body }, (err, doc) => {
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
