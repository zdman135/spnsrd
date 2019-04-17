const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

const db = require("./models");
const mongoose = require("mongoose");

const passport = require("passport");
const users = require("./routes/api/users");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());

require("./config/passport")(passport);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.connect("mongodb://localhost/spnsrd", { useNewUrlParser: true });

app.use("/api/users", users);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
