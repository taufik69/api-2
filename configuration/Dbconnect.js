const mongoose = require("mongoose");

exports.Dbconnection = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(process.env.DB_CONNECT)
    .then(() => {
      console.log(`Database connected`);
    })
    .catch((err) => {
      console.log(`Database Error: ${err}`);
    });
};
