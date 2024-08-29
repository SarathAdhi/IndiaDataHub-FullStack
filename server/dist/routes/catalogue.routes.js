"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogueRouter = void 0;
const express_1 = require("express");
const catalogue_controllers_1 = require("../controllers/catalogue.controllers");
const router = (0, express_1.Router)();
exports.CatalogueRouter = router;
router.get("/", catalogue_controllers_1.getAllCatalogue);
router.get("/categories", catalogue_controllers_1.getAllCatalogueCategories);
//# sourceMappingURL=catalogue.routes.js.map