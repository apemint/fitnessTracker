const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const PORT = process.env.PORT || 3000;


const db = require("./models");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    });

//---------ROUTES------------
require("./routes/htmlroutes")(app);
require("./routes/apiroutes")(app);


//-------app.listen----------
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});

// db.Workout.deleteMany({})
//   .then(() => db.Workout.collection.insertMany(workoutSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });