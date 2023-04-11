const express = require("express");
const _ = express.Router();

_.post("/createfeatures", async (req, res) => {
  try {
    const data = req.body;
  } catch (error) {
    res.status(404).json({
      message: `Error from Featurs route ${error}`,
    });
  }
});

module.exports = _;
