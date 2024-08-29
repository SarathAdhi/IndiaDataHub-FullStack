"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRouter = void 0;
const express_1 = require("express");
const auth_controllers_1 = require("../controllers/auth.controllers");
const protected_1 = require("../middlewares/protected");
const response_handler_1 = require("../utils/response-handler");
const router = (0, express_1.Router)();
exports.AuthRouter = router;
router.post("/login", auth_controllers_1.userLogin);
router.post("/register", auth_controllers_1.userRegister);
router.post("/reset-password", protected_1.protectedRoute, auth_controllers_1.userChangePassword);
router.get("/verify", protected_1.protectedRoute, function (req, res, next) {
    return (0, response_handler_1.responseHandler)(res).success(200, "", req?.user);
});
//# sourceMappingURL=auth.routes.js.map