import status from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ProjectServices } from "./project.service";

const createProjectIntoDb = catchAsync(async (req, res) => {
  const result = await ProjectServices.createProjectIntoDb(req.body);
  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: "Project created successfully",
    data: result,
  });
});

const getAllProjectsFromDb = catchAsync(async (req, res) => {
  const result = await ProjectServices.getAllProjectsFromDb();
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "All projects are retrieved successfully",
    data: result,
  });
});
const getSingleProjectFromDb = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProjectServices.getSingleProjectFromDb(id);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Project is retrieved successfully",
    data: result,
  });
});
const getFeaturedProjectFromDb = catchAsync(async (req, res) => {
  const result = await ProjectServices.getFeaturedProjectFromDb();
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Featured project are retrieved successfully",
    data: result,
  });
});

const updateProjectIntoDb = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProjectServices.updateProjectIntoDb(id, req.body);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Project updated successfully",
    data: result,
  });
});
const updateProjectFeaturedStatus = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { featured } = req.body;
  const result = await ProjectServices.updateProjectFeaturedStatus(
    id,
    featured
  );
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Project featured status updated successfully",
    data: result,
  });
});
const softDeleteProjectFromDb = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProjectServices.softDeleteProjectFromDb(id);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Project soft deleted successfully",
    data: result,
  });
});

const deleteProjectFromDb = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProjectServices.deleteProjectFromDb(id);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Project deleted successfully",
    data: result,
  });
});

export const ProjectControllers = {
  createProjectIntoDb,
  getAllProjectsFromDb,
  getSingleProjectFromDb,
  getFeaturedProjectFromDb,
  updateProjectIntoDb,
  updateProjectFeaturedStatus,
  deleteProjectFromDb,
  softDeleteProjectFromDb,
};
