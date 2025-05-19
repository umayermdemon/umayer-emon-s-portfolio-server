import status from "http-status";
import { Admin } from "../admin/admin.model";
import { ILogin } from "./auth.interface";

import bcrypt from "bcrypt";
import AppError from "../../errors/AppError";
import { jwtHelper } from "../../helper/jwtHelper";
import config from "../../config";
import { Secret } from "jsonwebtoken";

const login = async (payload: ILogin) => {
  const isExist = await Admin.findOne({ id: payload?.id });

  if (!isExist) {
    throw new AppError(status.NOT_FOUND, "User not found!");
  }

  const matchedPassword = await bcrypt.compare(
    payload?.password,
    isExist?.password
  );

  if (!matchedPassword) {
    throw new AppError(status.BAD_REQUEST, "Password doesn't matched");
  }

  const jwtPayload = {
    role: isExist?.role,
    slug: isExist?.slug,
  };
  const accessToken = jwtHelper.generateToken(
    jwtPayload,
    config.jwt.jwt_access_token_secret as Secret,
    config.jwt.jwt_access_token_expires_in as string
  );
  const refreshToken = jwtHelper.generateToken(
    jwtPayload,
    config.jwt.jwt_refresh_token_secret as Secret,
    config.jwt.jwt_refresh_token_expires_in as string
  );

  return { accessToken, refreshToken };
};
export const AuthServices = {
  login,
};
