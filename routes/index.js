const express = require("express");
const _ = express.Router();

const baseURl = process.env.BASE_URL;

_.use(baseURl, (req, res) => {
  res.status(200).json({
    message: `work is properly`,
  });
});

_.use(baseURl, (req, res) => {
  res.status(200).json({
    message: `Routes not found ${req.url}`,
  });
});

module.exports = _;
