import mongoose, { Schema, Document } from "mongoose";

export interface UserDocument extends Document {
  id: string;
  name: string;
  email: string;
  role: "admin" | "reader";
  borrowedBooks: string[];
}

const UserSchema = new Schema<UserDocument>({
  id: { type: String, required: true, unique: true },
  name: String,
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ["admin", "reader"], default: "reader" },
  borrowedBooks: [{ type: String }],
});

export const UserModel = mongoose.model<UserDocument>("User", UserSchema);
