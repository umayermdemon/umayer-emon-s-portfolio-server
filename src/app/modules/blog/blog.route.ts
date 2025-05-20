import { Router } from "express";
import { BlogControllers } from "./blog.controller";
import validateRequest from "../../middlewares/validateRequest";
import { BlogValidations } from "./blog.validation";
import auth from "../../middlewares/auth";

const router = Router();

// Create a new blog (only super_admin)
router.post(
  "/create-blog",
  auth("super_admin"),
  validateRequest(BlogValidations.createBlogValidationSchema),
  BlogControllers.createBlogIntoDb
);

// Get all blogs
router.get("/", BlogControllers.getAllBlogsFromDb);

// Get all featured blogs
router.get("/featured", BlogControllers.getFeaturedBlogsFromDb);

// Get a single blog by ID
router.get("/:id", BlogControllers.getSingleBlogFromDb);

// Update a blog (only super_admin)
router.put(
  "/:id",
  auth("super_admin"),
  validateRequest(BlogValidations.updateBlogValidationSchema),
  BlogControllers.updateBlogIntoDb
);

// Update only the 'featured' status of a blog (only super_admin)
router.patch(
  "/featured/:id",
  auth("super_admin"),
  validateRequest(BlogValidations.updateBlogFeaturedValidationSchema),
  BlogControllers.updateBlogFeaturedStatus
);

// Soft delete a blog (only super_admin)
router.patch("/:id", auth("super_admin"), BlogControllers.softDeleteBlogFromDb);

// Hard delete a blog (only super_admin)
router.delete("/:id", auth("super_admin"), BlogControllers.deleteBlogFromDb);

export const blogRoutes = router;
