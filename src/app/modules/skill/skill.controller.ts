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

export const SkillControllers = {
  createSkillIntoDb,
};
