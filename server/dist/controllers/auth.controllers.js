"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userChangePassword = exports.userRegister = exports.userLogin = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_schema_1 = __importDefault(require("../schemas/user.schema"));
const my_envs_1 = require("../utils/my-envs");
const response_handler_1 = require("../utils/response-handler");
const userLogin = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password)
        return (0, response_handler_1.responseHandler)(res).error(400, "Email and password are required");
    const user = await user_schema_1.default.findOne({ email }).select("+password");
    if (!user)
        return (0, response_handler_1.responseHandler)(res).error(400, "User not found");
    const isPasswordCorrect = await bcryptjs_1.default.compare(password, user.password);
    if (!isPasswordCorrect)
        return (0, response_handler_1.responseHandler)(res).error(401, "Invalid credentials");
    const token = await jsonwebtoken_1.default.sign({ user }, my_envs_1.SECRET_KEY, {
        expiresIn: "12h",
    });
    const data = {
        user,
        token,
    };
    return (0, response_handler_1.responseHandler)(res).success(200, "Logged in successfully", data);
};
exports.userLogin = userLogin;
const userRegister = async (req, res, next) => {
    const { name, email, password } = req.body;
    if (!email || !password)
        return (0, response_handler_1.responseHandler)(res).error(400, "Email and password are required");
    const userExists = await user_schema_1.default.findOne({ email });
    if (userExists)
        return (0, response_handler_1.responseHandler)(res).error(400, "User already exists");
    try {
        const user = new user_schema_1.default({
            name,
            email,
            password,
        });
        await user.save();
        const token = await jsonwebtoken_1.default.sign({ user }, my_envs_1.SECRET_KEY, {
            expiresIn: "12h",
        });
        const data = {
            user,
            token,
        };
        return (0, response_handler_1.responseHandler)(res).success(201, "User created successfully", data);
    }
    catch (error) {
        return (0, response_handler_1.responseHandler)(res).error(400, error);
    }
};
exports.userRegister = userRegister;
const userChangePassword = async (req, res, next) => {
    const loggedInUser = req.user;
    const { email } = loggedInUser;
    const { password } = req.body;
    const user = await user_schema_1.default.findOne({ email }).select("+password");
    if (!user)
        return (0, response_handler_1.responseHandler)(res).error(400, "User not found");
    const isThisPreviousPassword = await bcryptjs_1.default.compare(password, user.password);
    if (isThisPreviousPassword)
        return (0, response_handler_1.responseHandler)(res).error(404, "Same password cannot be used, please enter a new password");
    user.password = password;
    await user.save();
    return (0, response_handler_1.responseHandler)(res).success(201, "Password changed successfully, Please login again");
};
exports.userChangePassword = userChangePassword;
//# sourceMappingURL=auth.controllers.js.map