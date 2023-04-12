const mongoose = require("mongoose");
const { Schema } = mongoose;

const featuresSchema = new Schema({
  featureShape: {
    type: String,
    trim: true,
  },
  featureImage: {
    type: String,
    trim: true,
  },
  subTitle: {
    type: String,
    trim: true,
  },
  paragraph: {
    type: String,
    trim: true,
  },
  button: {
    text: {
      type: String,
    },
    link: {
      type: String,
    },
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("feature", featuresSchema);
