require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const { Dbconnection } = require("./configuration/Dbconnect.js");
const routes = require("./routes");

/* -------------------------------------------------------------------------- */
/*                       // todo all middleware                               */
/* -------------------------------------------------------------------------- */

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
Dbconnection();
app.use(routes);
/* -------------------------------------------------------------------------- */
/*                       // todo all middleware                               */
/* -------------------------------------------------------------------------- */

app.listen(process.env.PORT || 3000, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
