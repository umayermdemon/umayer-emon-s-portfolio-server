import status from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { SkillServices } from "./skill.service";

// Create a new skill
const createSkillIntoDb = catchAsync(async (req, res) => {
  const result = await SkillServices.createSkillIntoDb(req.body);
  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: "Skill created successfully",
    data: result,
  });
});

// Get all skills
const getAllSkillFromDb = catchAsync(async (req, res) => {
  const result = await SkillServices.getAllSkillFromDb();
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "All skills retrieved successfully",
    data: result,
  });
});

// Update a skill
const updateSkillIntoDb = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await SkillServices.updateSkillIntoDb(id, req.body);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Skill updated successfully",
    data: result,
  });
});

// Soft delete a skill
const softDeleteSkillFromDb = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await SkillServices.softDeleteSkillFromDb(id);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Skill soft deleted successfully",
    data: result,
  });
});

// Hard delete a skill
const deleteSkillFromDb = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await SkillServices.deleteSkillFromDb(id);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Skill permanently deleted successfully",
    data: result,
  });
});

export const SkillControllers = {
  createSkillIntoDb,
  getAllSkillFromDb,
  updateSkillIntoDb,
  deleteSkillFromDb,
  softDeleteSkillFromDb,
};
