const express = require("express");
const _ = express.Router();

const featuresSchema = require("../../model/featureModel");
_.post("/createfeatures", async (req, res) => {
  try {
    const { featureShape, featureImage, subTitle, paragraph, button } =
      req.body;

    /* -------------------------- send data to database ------------------------- */

    const postFeatureData = await new featuresSchema({
      featureShape,
      featureImage,
      subTitle,
      paragraph,
      button,
    }).save();

    /* -------------------------- send data to database ------------------------- */
    res.status(200).json(postFeatureData);
  } catch (error) {
    res.status(404).json({
      message: `Error from Featurs route ${error}`,
    });
  }
});

/* -------------------------------------------------------------------------- */
/*                               //todo get same data                         */
/* -------------------------------------------------------------------------- */

_.get("/getfeatures", async (req, res) => {
  try {
    const Retrive_data = await featuresSchema.find({});
    res.status(200).json(Retrive_data);
  } catch (err) {
    res.status(404).json({
      Error: `From features route get requrested object :${err}`,
    });
  }
});

module.exports = _;
