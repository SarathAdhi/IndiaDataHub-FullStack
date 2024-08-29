import bcrypt from "bcryptjs";
import { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import User from "../schemas/user.schema";
import { SECRET_KEY } from "../utils/my-envs";
import { responseHandler } from "../utils/response-handler";

export const userLogin: RequestHandler = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password)
    return responseHandler(res).error(400, "Email and password are required");

  const user = await User.findOne({ email }).select("+password");

  if (!user) return responseHandler(res).error(400, "User not found");

  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (!isPasswordCorrect)
    return responseHandler(res).error(401, "Invalid credentials");

  const token = await jwt.sign({ user }, SECRET_KEY!, {
    expiresIn: "12h",
  });

  const data = {
    user,
    token,
  };

  return responseHandler(res).success(200, "Logged in successfully", data);
};

export const userRegister: RequestHandler = async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!email || !password)
    return responseHandler(res).error(400, "Email and password are required");

  const userExists = await User.findOne({ email });

  if (userExists) return responseHandler(res).error(400, "User already exists");

  try {
    const user = new User({
      name,
      email,
      password,
    });

    await user.save();

    const token = await jwt.sign({ user }, SECRET_KEY!, {
      expiresIn: "12h",
    });

    const data = {
      user,
      token,
    };

    return responseHandler(res).success(201, "User created successfully", data);
  } catch (error) {
    return responseHandler(res).error(400, error);
  }
};

export const userChangePassword: RequestHandler = async (req, res, next) => {
  const loggedInUser = req.user!;
  const { email } = loggedInUser;

  const { password } = req.body;

  const user = await User.findOne({ email }).select("+password");

  if (!user) return responseHandler(res).error(400, "User not found");

  const isThisPreviousPassword = await bcrypt.compare(password, user.password);

  if (isThisPreviousPassword)
    return responseHandler(res).error(
      404,
      "Same password cannot be used, please enter a new password"
    );

  user.password = password;

  await user.save();

  return responseHandler(res).success(
    201,
    "Password changed successfully, Please login again"
  );
};
