const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

const User = require("../../models/User");
const Event = require("../../models/Event");

// endpoint to register users
router.post("/register", (req, res) => {
  console.log(req.body)
  // Form Validation
  const { errors, isValid } = validateRegisterInput(req.body);
  console.log(isValid)
  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    }

    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      image: req.body.image,
      age: req.body.age
    });

    // Hash password before saving to database
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then(user => res.json(user)).catch(err => console.log(err));
      })
    })
  })
});

// endpoint to log users in
router.post("/login", (req, res) => {

  // Form validation
  const { errors, isValid } = validateLoginInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;
  // Find user by email
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email/Username not found" });
    }
    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name
        };
        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 21600 // 6 hours in seconds
          },
          (err, token) => {
            res.json({
              id: payload.id,
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});

router.get("/:userId", (req, res) => {
  if (mongoose.Types.ObjectId.isValid(req.params.userId)) {
    User.findOne({ '_id': req.params.userId }).then(user => {
      if (!user) {
        return res.status(404).json({ user: "User was not found" });
      }
      return res.status(200).json(user)
    });
  } else {
    return res.status(404).json({ user: "Invalid User Id was attempted" })
  }
});

router.get("/:userId/events", (req, res) => {
  if (mongoose.Types.ObjectId.isValid(req.params.userId)) {
    Event.find({ 'createdBy': req.params.userId }).then(event => {
      return res.status(200).json(event)
    })
  } else {
    return res.status(404).json({ user: "Invalid User Id was attempted" })
  }
});

router.put("/:userId", (req, res) => {
  if (mongoose.Types.ObjectId.isValid(req.params.userId)) {
    User.findOneAndUpdate({ '_id': req.params.userId }, { $set: req.body }, function (err, doc) {
      if (err) return res.send(500, { error: err });
      return res.send("User data succesfully saved.");
    });
  } else {
    return res.status(404).json({ user: "Invalid User Id was attempted" })
  }
});

module.exports = router;