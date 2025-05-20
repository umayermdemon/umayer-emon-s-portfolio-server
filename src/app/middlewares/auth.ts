import { NextFunction, Request, Response } from "express";
import AppError from "../errors/AppError";
import status from "http-status";
import { jwtHelper } from "../helper/jwtHelper";
import config from "../config";
import { Secret } from "jsonwebtoken";
import { TCurrentUser } from "../types/user.types";

const auth = (role: string) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization;
      if (!token) {
        throw new AppError(status.UNAUTHORIZED, "You are not authorized!!");
      }

      const decodedData = jwtHelper.verifyToken(
        token,
        config.jwt.jwt_access_token_secret as Secret
      );
      console.log(decodedData);
      if (role && role !== decodedData?.role) {
        throw new AppError(status.FORBIDDEN, "Forbidden!");
      }
      req.user = decodedData as TCurrentUser;
      next();
    } catch (err) {
      next(err);
    }
  };
};

export default auth;
