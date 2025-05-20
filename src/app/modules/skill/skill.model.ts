import { model, Schema } from "mongoose";
import { ISkill } from "./skill.interface";

const skillSchema = new Schema<ISkill>({
  logo: { type: String, required: true },
  skillName: { type: String, required: true, unique: true },
  isDeleted: { type: Boolean, default: false },
});

export const Skill = model<ISkill>("Skill", skillSchema);
