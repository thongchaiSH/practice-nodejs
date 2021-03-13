import mongoose from "mongoose";
import { app } from "./app";

const start = async () => {
  //validate enviroment variable
  if (!process.env.JWT_KEY) {
    throw new Error("JWT_KEY must be defind !!");
  }

  try {
    //connet mongo db
    await mongoose.connect("mongodb://auth-mongo-srv:27017/auth", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("Connected to mongodb");
  } catch (err) {
    console.error(err);
  }

  //start server
  app.listen(3000, () => {
    console.log("Listening on port 3000");
  });
};

start();
