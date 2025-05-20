import { model, Schema } from "mongoose";
import { IAdmin } from "./admin.interface";

const adminSchema = new Schema<IAdmin>({
  id: { type: String, required: true },
  email: { type: String, unique: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  role: {
    type: String,
    required: true,
    enum: ["super_admin"],
  },
  slug: { type: String, unique: true },
});

export const Admin = model<IAdmin>("Admin", adminSchema);
