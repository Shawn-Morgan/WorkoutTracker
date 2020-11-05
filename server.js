const express = require("express");

//++
const logger = require("morgan");

const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000

//++
const db = require("./models");

const app = express();

//++
const databaseName = "workout_db"

//++
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// original code from previous assignment...
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
//   useNewUrlParser: true,
//   useFindAndModify: false
// });

mongoose.connect(process.env.MONDODB_URI || 'mongodb+srv://shawnm74:RemakeMyself2020&@workouttracker.gcjb2.mongodb.net/WorkoutTracker?retryWrites=true&w=majority', 
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}) 
    .then(() => console.log('connected to database: ${databaseName}'));

// routes
app.use(require("./routes/api-routes.js"));
//++
app.use("/", require("./routes/html-routes.js"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});