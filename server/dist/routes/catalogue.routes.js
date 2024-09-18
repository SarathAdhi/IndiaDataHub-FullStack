"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogueRouter = void 0;
const express_1 = require("express");
const catalogue_controllers_1 = require("../controllers/catalogue.controllers");
const protected_1 = require("../middlewares/protected");
const router = (0, express_1.Router)();
exports.CatalogueRouter = router;
router.get("/", protected_1.protectedRoute, catalogue_controllers_1.getAllCatalogue);
router.get("/categories", catalogue_controllers_1.getAllCatalogueCategories);
router.get("/create", catalogue_controllers_1.createCatalogues);
//# sourceMappingURL=catalogue.routes.js.map