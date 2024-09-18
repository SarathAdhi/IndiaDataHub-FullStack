/// <reference path="./types/express.d.ts" />

import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import express, { Express } from "express";
import mongoose from "mongoose";
import { AuthRouter } from "./routes/auth.routes";
import { CatalogueRouter } from "./routes/catalogue.routes";
import { EximRouter } from "./routes/exim.routes";
import { MONGO_DB_URI } from "./utils/my-envs";

const app: Express = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  next();
});

app.get("/", (req, res) => {
  res.send("IndiaDataHub Backend");
});

app.use("/auth", AuthRouter);
app.use("/catalogues", CatalogueRouter);
app.use("/exim", EximRouter);

mongoose
  .connect(MONGO_DB_URI!)
  .then(() => console.log("MONGODB: CONNECTED TO DB"));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
