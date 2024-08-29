"use strict";
/// <reference path="./types/express.d.ts" />
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const auth_routes_1 = require("./routes/auth.routes");
const catalogue_routes_1 = require("./routes/catalogue.routes");
const my_envs_1 = require("./utils/my-envs");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json({ limit: "50mb" }));
app.use(express_1.default.urlencoded({ extended: true, limit: "50mb" }));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get("/", (req, res) => {
    res.send("IndiaDataHub Backend");
});
app.use("/auth", auth_routes_1.AuthRouter);
app.use("/catalogues", catalogue_routes_1.CatalogueRouter);
mongoose_1.default
    .connect(my_envs_1.MONGO_DB_URI)
    .then(() => console.log("MONGODB: CONNECTED TO DB"));
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map