let express = require("express"),
  mongoose = require("mongoose"),
  cors = require("cors"),
  bobyParser = require("body-parser"),
  dbConfig = require("./database/db");

//Express Route
const studentRoute = require("./routes/student.route");

//Conecting MongoDB Database
mongoose.Promise = global.Promise;
mongoose
  .connect(dbConfig.db, {
    useNewUrlParser: true,
  })
  .then(
    () => {
      console.log("Database successfully connected");
    },
    (err) => {
      console.log("Could not connect to database: " + err);
    }
  );

const app = express();
app.use(bobyParser.json());
app.use(
  bobyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use("/student", studentRoute);

//PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log("Connected to port " + port);
});

//404 Error
app.use((req, res, next) => {
  next(createError(404));
});

//Error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
