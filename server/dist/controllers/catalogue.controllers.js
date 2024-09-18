"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCatalogues = exports.getAllCatalogueCategories = exports.getAllCatalogue = void 0;
const catalogues_1 = require("../data/catalogues");
const catalogue_schema_1 = __importDefault(require("../schemas/catalogue.schema"));
const response_handler_1 = require("../utils/response-handler");
const getAllCatalogue = async (req, res, next) => {
    const catalogue = await catalogue_schema_1.default.find({});
    return (0, response_handler_1.responseHandler)(res).success(200, "", catalogue);
};
exports.getAllCatalogue = getAllCatalogue;
const getAllCatalogueCategories = async (req, res, next) => {
    const catalogue = await catalogue_schema_1.default.find({});
    const categoriesMap = new Map();
    catalogue.forEach((item) => {
        if (categoriesMap.has(item.Category)) {
            const previousCategories = categoriesMap.get(item.Category) || [];
            categoriesMap.set(item.Category, [
                ...previousCategories,
                item.SubCategory,
            ]);
        }
        else {
            categoriesMap.set(item.Category, [item.SubCategory]);
        }
    });
    const categories = Array.from(categoriesMap).map(([key, value]) => ({
        Category: key,
        SubCategories: value,
    }));
    return (0, response_handler_1.responseHandler)(res).success(200, "", categories);
};
exports.getAllCatalogueCategories = getAllCatalogueCategories;
const createCatalogues = async (req, res, next) => {
    await catalogue_schema_1.default.insertMany(catalogues_1.catalogues);
    return (0, response_handler_1.responseHandler)(res).success(201, "Catalogue created successfully");
};
exports.createCatalogues = createCatalogues;
//# sourceMappingURL=catalogue.controllers.js.map