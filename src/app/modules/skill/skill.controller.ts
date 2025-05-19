import status from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { SkillServices } from "./skill.service";

const createSkillIntoDb = catchAsync(async (req, res) => {
  const result = await SkillServices.createSkillIntoDb(req.body);
  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: "Skill created successfully",
    data: result,
  });
});
const getAllSkillFromDb = catchAsync(async (req, res) => {
  const result = await SkillServices.getAllSkillFromDb();
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "All skills are retrieved successfully",
    data: result,
  });
});
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

export const SkillControllers = {
  createSkillIntoDb,
  getAllSkillFromDb,
  updateSkillIntoDb,
};
