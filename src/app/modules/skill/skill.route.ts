import { Router } from "express";
import { SkillControllers } from "./skill.controller";
import validateRequest from "../../middlewares/validateRequest";
import { SkillValidations } from "./skill.validation";

const router = Router();

router.post(
  "/create-skill",
  validateRequest(SkillValidations.createSkillValidationSchema),
  SkillControllers.createSkillIntoDb
);

export const skillRoutes = router;
