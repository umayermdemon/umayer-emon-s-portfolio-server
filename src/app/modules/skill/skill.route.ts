import { Router } from "express";
import { SkillControllers } from "./skill.controller";
import validateRequest from "../../middlewares/validateRequest";
import { SkillValidations } from "./skill.validation";
import auth from "../../middlewares/auth";

const router = Router();

// Create a new skill (only super_admin)
router.post(
  "/create-skill",
  auth("super_admin"),
  validateRequest(SkillValidations.createSkillValidationSchema),
  SkillControllers.createSkillIntoDb
);

// Get all skills
router.get("/", SkillControllers.getAllSkillFromDb);

// Update a skill by ID (only super_admin)
router.put(
  "/:id",
  auth("super_admin"),
  validateRequest(SkillValidations.updateSkillValidationSchema),
  SkillControllers.updateSkillIntoDb
);

// Soft delete a skill by ID (only super_admin)
router.patch(
  "/:id",
  auth("super_admin"),
  SkillControllers.softDeleteSkillFromDb
);

// Hard delete a skill by ID (only super_admin)
router.delete("/:id", auth("super_admin"), SkillControllers.deleteSkillFromDb);

export const skillRoutes = router;
