const express = require("express");
const _ = express.Router();

const featurs = require("./featurs.js");

app.use("/feature", featurs);

module.exports = _;
