import { Router } from "express";
import {
  getAllCatalogue,
  getAllCatalogueCategories,
} from "../controllers/catalogue.controllers";

const router = Router();

router.get("/", getAllCatalogue);

router.get("/categories", getAllCatalogueCategories);

export { router as CatalogueRouter };
