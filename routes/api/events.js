const express = require("express");
const router = express.Router();
const keys = require("../../config/keys");

const Event = require("../../models/Event");

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

module.exports = router;