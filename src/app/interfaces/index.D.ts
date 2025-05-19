import { TCurrentUser } from "../types/user.types";

declare global {
  namespace Express {
    interface Request {
      user: TCurrentUser;
    }
  }
}
