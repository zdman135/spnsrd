const express = require("express");
const router = express.Router();
const keys = require("../../config/keys");

const Event = require("../../models/Event");

router.post("/createevent", (req, res) => {
    const newEvent = new Event({
        name: req.body.name,
        date: req.body.date,
    });

    newEvent.save().then(event => res.json(event)).catch(err => console.log(err));
});

module.exports = router;