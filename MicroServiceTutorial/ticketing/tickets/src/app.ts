import { errorHandler, NotFoundError } from "@ithongchai/common";
import { json } from "body-parser";
import cookieSession from "cookie-session";
import express from "express";
import "express-async-errors";




const app = express();
app.set("trust proxy", true);
//set send return json
app.use(json());

//setup cookie
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV != "test",
  })
);

//setup routes


//setup 404 page
app.all("*", async (req, res, next) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
