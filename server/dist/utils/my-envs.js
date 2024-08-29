"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FRONTEND_URL = exports.SECRET_KEY = exports.MONGO_DB_URI = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.MONGO_DB_URI = process.env.MONGO_DB_URI;
exports.SECRET_KEY = process.env.SECRET_KEY;
exports.FRONTEND_URL = process.env.FRONTEND_URL;
//# sourceMappingURL=my-envs.js.map