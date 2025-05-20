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
router.put("/:id", SkillControllers.updateSkillIntoDb);
router.patch("/:id", SkillControllers.softDeleteSkillFromDb);
router.delete("/:id", SkillControllers.deleteSkillFromDb);

export const skillRoutes = router;
