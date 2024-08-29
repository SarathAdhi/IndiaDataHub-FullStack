import { Router } from "express";
import {
  createCatalogues,
  getAllCatalogue,
  getAllCatalogueCategories,
} from "../controllers/catalogue.controllers";

const router = Router();

router.get("/", getAllCatalogue);

router.get("/categories", getAllCatalogueCategories);

router.get("/create", createCatalogues);

export { router as CatalogueRouter };
