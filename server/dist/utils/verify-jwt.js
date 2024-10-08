"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyJwtWithBearer = exports.verifyJwtWithRequest = void 0;
const jsonwebtoken_1 = __importStar(require("jsonwebtoken"));
const get_bearer_token_1 = require("./get-bearer-token");
const my_envs_1 = require("./my-envs");
const verifyJwtWithRequest = async (req) => {
    try {
        return (await jsonwebtoken_1.default.verify((0, get_bearer_token_1.getBearerToken)(req), my_envs_1.SECRET_KEY));
    }
    catch (error) {
        if (error instanceof jsonwebtoken_1.TokenExpiredError)
            throw new Error("JWT Expired");
        throw new Error(error?.message || error);
    }
};
exports.verifyJwtWithRequest = verifyJwtWithRequest;
const verifyJwtWithBearer = async (bearer) => {
    try {
        return (await jsonwebtoken_1.default.verify(bearer, my_envs_1.SECRET_KEY));
    }
    catch (error) {
        if (error instanceof jsonwebtoken_1.TokenExpiredError)
            throw new Error("JWT Expired");
        throw new Error(error?.message || error);
    }
};
exports.verifyJwtWithBearer = verifyJwtWithBearer;
//# sourceMappingURL=verify-jwt.js.map