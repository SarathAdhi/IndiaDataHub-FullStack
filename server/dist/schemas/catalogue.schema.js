"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CatalogueSchema = new mongoose_1.Schema({
    Id: { type: String, required: true },
    Title: { type: String, required: true },
    Source: { type: String, required: true },
    Frequency: { type: String, required: true },
    Unit: { type: String, required: true },
    Tags: { type: String, required: true },
    Tag2: { type: String, default: null },
    Tag3: { type: String, default: null },
    Parent: { type: String, default: null },
    Sibling: { type: String, default: null },
    Child: { type: String, default: null },
    TagIdx1: { type: String, default: null },
    TagIdx2: { type: String, default: null },
    TagIdx3: { type: String, default: null },
    OldSeries: { type: String, default: null },
    StateData: { type: String, required: true },
    GlobalData: { type: String, required: true },
    Key_Series: { type: String, default: null },
    Category: { type: String, default: null },
    SubCategory: { type: String, default: null },
    Description: { type: String, required: true },
    Formula: { type: String, default: null },
    Numerator: { type: String, default: null },
    Denominator: { type: String, default: null },
    Range: { type: String, default: null },
});
const Catalogue = (0, mongoose_1.model)("Catalogue", CatalogueSchema);
exports.default = Catalogue;
//# sourceMappingURL=catalogue.schema.js.map