const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Event = require("../../models/Event");
const nodeMailer = require("nodemailer");

router.get("/", (req, res) => {
  if (req.query.sponsorship !== undefined) {
    let isSponsored = req.query.sponsorship;

    Event.find({ isSponsored: isSponsored }).then(event => {
      return res.status(200).json(event);
    });
  } else if (req.query.category !== undefined) {
    let category = req.query.category;

    Event.find({ category: category }).then(event => {
      return res.status(200).json(event);
    });
  } else if (req.query.date === "1week") {
    Event.find({
      date: {
        $gte: Date.now(),
        $lte: Date.now() + 6.04e8
      }
    }).then(event => {
      return res.status(200).json(event);
    });
  } else {
    Event.find({}, (err, events) => {
      res.send(events);
    });
  }
});

router.get("/:eventId", (req, res) => {
  if (mongoose.Types.ObjectId.isValid(req.params.eventId)) {
    Event.findOne({ _id: req.params.eventId }).then(event => {
      if (!event) {
        return res.status(404).json({ event: "Event was not found." });
      }
      return res.status(200).json(event);
    });
  } else {
    return res.status(404).json({ event: "Invalid Event Id was attempted" });
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
    createdBy: req.body.createdBy,
    image: req.body.image
  });

  newEvent
    .save()
    .then(event => res.json(event))
    .catch(err => console.log(err));
});

router.put("/:eventId", (req, res) => {
  if (mongoose.Types.ObjectId.isValid(req.params.eventId)) {
    Event.findOneAndUpdate(
      { _id: req.params.eventId },
      { $set: req.body, $push: { sponsors: req.body.sponsorId } },
      (err, doc) => {
        if (err) return res.send(500, { error: err });
        return res.send("Event Successfully Saved");
      }
    );
    sendMail();
  } else {
    return res.status(404).json({ event: "Invalid Event Id was attempted" });
  }
});

router.delete("/:eventId", (req, res) => {
  if (mongoose.Types.ObjectId.isValid(req.params.eventId)) {
    Event.deleteOne({ _id: req.params.eventId }, err => {
      if (err) return handleError(err);
      return res.send("Event Successfully Deleted.");
    });
  } else {
    return res.status(404).json({ event: "Invalid Event Id was attempted" });
  }
});

sendMail = (req, res) => {
  const transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, //true for 465 port, false for other ports
    auth: {
      user: "amblingpajamaionizer@gmail.com",
      pass: "Pajama123"
    }
  });

  const textMessage = "Hi, You have been sponsored, Here is the contact info of your sponsor: \n Email: robbob@gmail.com \n PHone: 555-555-5555"
  const htmlMessage = ""

  const mailOptions = {
    from: '"Your Name" <robbob@gmail.com>', // sender address
    to: "amblingpajamaionizer@gmail.com", // list of receivers
    subject: "You Have A Sponsor! ", // Subject line
    text: textMessage,
    html: htmlMessage
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(400).send({ success: false });
    } else {
      res.status(200).send({ success: true });
    }
  });
};

module.exports = router;
