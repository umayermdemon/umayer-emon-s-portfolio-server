import { Router } from "express";
import { ProjectControllers } from "./project.controller";
import validateRequest from "../../middlewares/validateRequest";
import { ProjectValidations } from "./project.validation";
import auth from "../../middlewares/auth";

const router = Router();

// Create a new project (only super_admin)
router.post(
  "/create-project",
  auth("super_admin"),
  validateRequest(ProjectValidations.createProjectValidationSchema),
  ProjectControllers.createProjectIntoDb
);

// Get all projects
router.get("/", ProjectControllers.getAllProjectsFromDb);

// Get all featured projects
router.get("/featured", ProjectControllers.getFeaturedProjectFromDb);

// Get a single project by ID
router.get("/:id", ProjectControllers.getSingleProjectFromDb);

// Update a project (only super_admin)
router.put(
  "/:id",
  auth("super_admin"),
  validateRequest(ProjectValidations.updateProjectValidationSchema),
  ProjectControllers.updateProjectIntoDb
);

// Update only the 'featured' status of a project (only super_admin)
router.patch(
  "/featured/:id",
  auth("super_admin"),
  validateRequest(ProjectValidations.updateProjectFeaturedValidationSchema),
  ProjectControllers.updateProjectFeaturedStatus
);

// Soft delete a project (only super_admin)
router.patch(
  "/:id",
  auth("super_admin"),
  ProjectControllers.softDeleteProjectFromDb
);

// Hard delete a project (only super_admin)
router.delete(
  "/:id",
  auth("super_admin"),
  ProjectControllers.deleteProjectFromDb
);

export const projectRoutes = router;
