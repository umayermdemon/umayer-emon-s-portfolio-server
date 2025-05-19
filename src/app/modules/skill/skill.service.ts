import { ISkill } from "./skill.interface";
import { Skill } from "./skill.model";

const createSkillIntoDb = async (payload: ISkill) => {
  const result = await Skill.create(payload);
  return result;
};

export const SkillServices = {
  createSkillIntoDb,
};
