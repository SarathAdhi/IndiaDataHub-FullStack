import "express";
import type { UserType } from "../schemas/user.schema";

interface UserRequest extends Omit<UserType, "created_at"> {}

declare global {
  namespace Express {
    interface Request {
      user?: UserRequest; // Adjust the type according to your user model
    }
  }
}
