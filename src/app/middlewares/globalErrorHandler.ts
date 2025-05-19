import { ErrorRequestHandler, NextFunction } from "express";
import { ZodError } from "zod";
import zodErrorHandler from "../errors/handleZodError";
import { TErrorSource } from "../interfaces/error";
import AppError from "../errors/AppError";
import handleDuplicateError from "../errors/handleDuplicateError";

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let statusCode = 500;
  let message = "Something went wrong!";
  let errorSources: TErrorSource = [
    {
      path: "",
      message: "Something went wrong!",
    },
  ];

  if (err instanceof ZodError) {
    const getZodError = zodErrorHandler(err);
    statusCode = getZodError?.statusCode;
    message = getZodError?.message;
    errorSources = getZodError?.errorSources;
  } else if (err?.code === 11000) {
    const getDuplicateError = handleDuplicateError(err);
    statusCode = getDuplicateError?.statusCode;
    message = getDuplicateError?.message;
    errorSources = getDuplicateError?.errorSources;
  } else if (err instanceof AppError) {
    statusCode = err?.statusCode;
    message = err?.message;
    errorSources = [
      {
        path: "",
        message: err?.message,
      },
    ];
  } else if (err instanceof Error) {
    message = err?.message;
    errorSources = [
      {
        path: "",
        message: err?.message,
      },
    ];
  }
  res.status(statusCode).json({
    success: false,
    message: err.message || message,
    // err,
    errorSources,
  });
};

export default globalErrorHandler;
