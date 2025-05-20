import { model, Schema } from "mongoose";
import { IProject } from "./project.interface";

const projectSchema = new Schema<IProject>(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    liveLinks: { type: String, required: true },
    clientRepo: { type: String, required: true },
    serverRepo: { type: String },
    frontendTechnologies: { type: [String], required: true },
    backendTechnologies: { type: [String], required: true },
    image: { type: String, required: true },
    duration: { type: String },
    teamMembers: { type: [String] },
    demoVideo: { type: String },
    status: { type: String, enum: ["completed", "in-progress", "planned"] },
    featured: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export const Project = model<IProject>("Project", projectSchema);
