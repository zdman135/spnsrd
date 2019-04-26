const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load User model
const User = require("../../models/User");

// endpoint to register users
router.post("/register", (req, res) => {
    // Form Validation
    const { errors, isValid } = validateRegisterInput(req.body);

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
        return res.status(404).json({ emailnotfound: "Email not found" });
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

router.get("/:email", (req, res) => {
  let email = req.params.email
  email = decodeURIComponent(email);

  User.findOne({ email: email }).then( user => {
    if (!user) {
      return res.status(404).json({ user: "user was not found" });
    }
    return res.status(200).json(user)
  });

})

router.put("/:email", (req, res) => {

let findEmail = {'email':req.params.email};
findEmail = decodeURIComponent(findEmail);

User.findOneAndUpdate(findEmail, {$set: {name: "jobe"}}, function(err, doc){
    if (err) return res.send(500, { error: err });
    return res.send("succesfully saved");
});
  

});

module.exports = router;