import status from "http-status";
import AppError from "../../errors/AppError";
import { IProject } from "./project.interface";
import { Project } from "./project.model";

// Create a new project
const createProjectIntoDb = async (payload: IProject) => {
  const result = await Project.create(payload);
  return result;
};

// Get all projects (not deleted)
const getAllProjectsFromDb = async () => {
  const result = await Project.find({ isDeleted: false });
  if (!result.length) {
    throw new AppError(status.NOT_FOUND, "There are no projects");
  }
  return result;
};

// Get a single project by ID
const getSingleProjectFromDb = async (id: string) => {
  const result = await Project.findOne({ _id: id, isDeleted: false });
  if (!result) {
    throw new AppError(status.NOT_FOUND, "Project not found!");
  }
  return result;
};

// Get all featured projects
const getFeaturedProjectFromDb = async () => {
  const result = await Project.find({ featured: true, isDeleted: false });
  if (!result) {
    throw new AppError(status.NOT_FOUND, "Featured project not found!");
  }
  return result;
};

// Update a project by ID
const updateProjectIntoDb = async (id: string, payload: Partial<IProject>) => {
  const isExistsProject = await Project.findOne({ _id: id, isDeleted: false });
  if (!isExistsProject) {
    throw new AppError(status.NOT_FOUND, "Project not found!");
  }
  const { isDeleted, featured, ...restPayload } = payload;
  const result = await Project.findOneAndUpdate(
    { _id: isExistsProject._id },
    restPayload,
    { new: true }
  );
  return result;
};
// Update only the 'featured' field of a project
const updateProjectFeaturedStatus = async (id: string, featured: boolean) => {
  const isExistsProject = await Project.findOne({ _id: id, isDeleted: false });
  if (!isExistsProject) {
    throw new AppError(status.NOT_FOUND, "Project not found!");
  }
  const result = await Project.findOneAndUpdate(
    { _id: isExistsProject._id },
    { featured },
    { new: true }
  );
  return result;
};
// Soft delete a project by ID
const softDeleteProjectFromDb = async (id: string) => {
  const isExistsProject = await Project.findOne({ _id: id, isDeleted: false });
  if (!isExistsProject) {
    throw new AppError(status.NOT_FOUND, "Project not found!");
  }
  const result = await Project.updateOne(
    { _id: isExistsProject._id },
    { isDeleted: true }
  );
  if (!result.modifiedCount) {
    throw new AppError(status.BAD_REQUEST, "Project soft delete failed!");
  }
  return null;
};

// Hard delete a project by ID
const deleteProjectFromDb = async (id: string) => {
  const isExistsProject = await Project.findOne({ _id: id });
  if (!isExistsProject) {
    throw new AppError(status.NOT_FOUND, "Project not found!");
  }
  const result = await Project.deleteOne({ _id: isExistsProject._id });
  if (!result.deletedCount) {
    throw new AppError(status.BAD_REQUEST, "Project hard delete failed!");
  }
  return null;
};

export const ProjectServices = {
  createProjectIntoDb,
  getAllProjectsFromDb,
  getSingleProjectFromDb,
  getFeaturedProjectFromDb,
  updateProjectIntoDb,
  updateProjectFeaturedStatus,
  softDeleteProjectFromDb,
  deleteProjectFromDb,
};
