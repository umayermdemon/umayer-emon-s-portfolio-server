import { Router } from "express";
import { AuthControllers } from "./auth.controller";
import validateRequest from "../../middlewares/validateRequest";
import { authValidation } from "./auth.validation";

const router = Router();

router.post(
  "/login",
  validateRequest(authValidation.loginValidationSchema),
  AuthControllers.login
);

export const authRoutes = router;
