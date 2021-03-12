import { Request, Response, NextFunction } from "express";
import { RequestValidationError } from "../errors/request-validation-error";
import { DatabaseConnectionError } from "../errors/database-conntection-error";
import { CustomError } from "../errors/custom-error";
export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    // console.log("Handling this error as a request validation error");
    // const formattedErrors = err.errors.map((error) => {
    //   return { message: error.msg, field: error.param };
    // });
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }
//   if (err instanceof DatabaseConnectionError) {
//     // return res.status(500).send({ errors: [{ message: err.reason }] });
//     // console.log("Handling this error as a database validation error");
//     return res.status(err.statusCode).send({ errors: err.serializeErrors() });
//   }
  console.log("Something went wrong", err);
  res.status(400).send({
    errors: [{ message: "Something went work" }],
  });
};
