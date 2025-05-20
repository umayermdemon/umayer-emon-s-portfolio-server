import status from "http-status";
import AppError from "../../errors/AppError";
import { ISkill } from "./skill.interface";
import { Skill } from "./skill.model";

// Create a new skill
const createSkillIntoDb = async (payload: ISkill) => {
  const result = await Skill.create(payload);
  return result;
};

// Get all skills (not deleted)
const getAllSkillFromDb = async () => {
  const result = await Skill.find({ isDeleted: false });
  return result;
};

// Update a skill by ID
const updateSkillIntoDb = async (id: string, payload: Partial<ISkill>) => {
  const isExistsSkill = await Skill.findOne({ _id: id, isDeleted: false });
  if (!isExistsSkill) {
    throw new AppError(status.NOT_FOUND, "Skill not found!");
  }
  const result = await Skill.findOneAndUpdate(
    { _id: isExistsSkill._id },
    {
      logo: payload.logo,
      skillName: payload.skillName,
      description: payload.description,
      category: payload.category,
    },
    { new: true }
  );
  return result;
};

// Soft delete a skill by ID
const softDeleteSkillFromDb = async (id: string) => {
  const isExistsSkill = await Skill.findOne({ _id: id, isDeleted: false });
  if (!isExistsSkill) {
    throw new AppError(status.NOT_FOUND, "Skill not found!");
  }
  const result = await Skill.updateOne(
    { _id: isExistsSkill._id },
    { isDeleted: true }
  );
  if (!result.modifiedCount) {
    throw new AppError(status.BAD_REQUEST, "Soft delete failed!");
  }
  return null;
};

// Hard delete a skill by ID
const deleteSkillFromDb = async (id: string) => {
  const isExistsSkill = await Skill.findOne({ _id: id, isDeleted: false });
  if (!isExistsSkill) {
    throw new AppError(status.NOT_FOUND, "Skill not found!");
  }
  const result = await Skill.deleteOne({ _id: isExistsSkill._id });
  if (!result.deletedCount) {
    throw new AppError(status.BAD_REQUEST, "Hard delete failed!");
  }
  return null;
};

export const SkillServices = {
  createSkillIntoDb,
  getAllSkillFromDb,
  updateSkillIntoDb,
  softDeleteSkillFromDb,
  deleteSkillFromDb,
};
