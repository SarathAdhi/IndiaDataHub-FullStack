"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EximRouter = void 0;
const express_1 = require("express");
const exim_controllers_1 = require("../controllers/exim.controllers");
const protected_1 = require("../middlewares/protected");
const router = (0, express_1.Router)();
exports.EximRouter = router;
router.get("/", protected_1.protectedRoute, exim_controllers_1.getExim);
//# sourceMappingURL=exim.routes.js.map