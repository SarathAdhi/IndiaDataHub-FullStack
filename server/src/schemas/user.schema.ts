import { Document, InferSchemaType, Schema, Types, model } from "mongoose";
import { hashPassword } from "../utils/hash-password";

import bcrypt from "bcryptjs";

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.pre("save", async function (next) {
  const password = await hashPassword(this.password);
  this.password = password;

  next();
});

UserSchema.methods.verifyPassword = async function (
  user_password: string,
  db_password: string
) {
  return await bcrypt.compare(user_password, db_password);
};

export type UserType = InferSchemaType<typeof UserSchema> &
  Document<Types.ObjectId>;

const User = model("User", UserSchema);

export default User;
