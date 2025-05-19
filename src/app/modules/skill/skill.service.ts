import status from "http-status";
import AppError from "../../errors/AppError";
import { ISkill } from "./skill.interface";
import { Skill } from "./skill.model";

const createSkillIntoDb = async (payload: ISkill) => {
  const result = await Skill.create(payload);
  return result;
};
const getAllSkillFromDb = async () => {
  const result = await Skill.find();
  return result;
};
const updateSkillIntoDb = async (id: string, payload: Partial<ISkill>) => {
  const isExistsSkill = await Skill.findOne({ _id: id });
  if (!isExistsSkill) {
    throw new AppError(status.NOT_FOUND, "Skill not found!");
  }
  const result = await Skill.findOneAndUpdate(
    {
      _id: isExistsSkill?._id,
    },
    {
      logo: payload?.logo,
      skillName: payload?.skillName,
    }
  );
  return result;
};

export const SkillServices = {
  createSkillIntoDb,
  getAllSkillFromDb,
  updateSkillIntoDb,
};
