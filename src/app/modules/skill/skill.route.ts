import { Router } from "express";
import { SkillControllers } from "./skill.controller";
import validateRequest from "../../middlewares/validateRequest";
import { SkillValidations } from "./skill.validation";
import auth from "../../middlewares/auth";

const router = Router();

router.post(
  "/create-skill",
  auth("super_admin"),
  validateRequest(SkillValidations.createSkillValidationSchema),
  SkillControllers.createSkillIntoDb
);
router.get("/", SkillControllers.getAllSkillFromDb);
router.put(
  "/:id",
  auth("super_admin"),
  validateRequest(SkillValidations.updateSkillValidationSchema),
  SkillControllers.updateSkillIntoDb
);
router.patch(
  "/:id",
  auth("super_admin"),
  SkillControllers.softDeleteSkillFromDb
);
router.delete("/:id", auth("super_admin"), SkillControllers.deleteSkillFromDb);

export const skillRoutes = router;
