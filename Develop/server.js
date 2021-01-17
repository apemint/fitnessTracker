const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
//const seed = require("./seeders/seed")

//port
const PORT = process.env.PORT || 3000;

//express app
const app = express();

const databaseUrl = "dbName";
const collections = ["collectionNames"];

const db = require("./models");

//log on db error
// db.on("error", error => {
//     console.log("Database Error:", error);
//   });

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

//---------ROUTES------------
require("./routes/html")(app);
require("./routes/api")(app);


//-------app.listen----------
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });