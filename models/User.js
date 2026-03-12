import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: {type: String, enum: ["student", "owner"], required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  department: { type: String },
  level: { type: String },
  password: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model("User", userSchema);
