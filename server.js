const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
require('dotenv').config()

const mongoose = require("mongoose");

//DO NOT FORGET TO UPDATE YOUR LOCAL DATABASE NAME AND START MONGOD BEFORE RUNNING NPM START
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/{LOCALDATABASENAME}";

const passport = require("passport");
const users = require("./routes/api/users");
const events = require("./routes/api/events");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());

require("./config/passport")(passport);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

app.use("/api/users", users);
app.use("/api/events", events);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

const mongo = mongoose.connection;
mongo.on('error', console.error.bind(console, 'connection error:'));
mongo.once('open', function() {
    console.log(`Mongoose Connected to DB Succesfully using ${MONGODB_URI}`)
    app.listen(PORT, function() {
      console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
});
