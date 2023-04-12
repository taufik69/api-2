const express = require("express");
const _ = express.Router();
const Apiroutes = require("../routes/api/index");
const baseURl = process.env.BASE_URL;

_.use(baseURl, Apiroutes);

_.use(baseURl, (req, res) => {
  res.status(200).json({
    message: `Routes not found ${req.url}`,
  });
});

module.exports = _;
