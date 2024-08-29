"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const hash_password_1 = require("../utils/hash-password");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const UserSchema = new mongoose_1.Schema({
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
    const password = await (0, hash_password_1.hashPassword)(this.password);
    this.password = password;
    next();
});
UserSchema.methods.verifyPassword = async function (user_password, db_password) {
    return await bcryptjs_1.default.compare(user_password, db_password);
};
const User = (0, mongoose_1.model)("User", UserSchema);
exports.default = User;
//# sourceMappingURL=user.schema.js.map