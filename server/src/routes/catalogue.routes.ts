import { Router } from "express";
import {
  createCatalogues,
  getAllCatalogue,
  getAllCatalogueCategories,
} from "../controllers/catalogue.controllers";
import { protectedRoute } from "../middlewares/protected";

const router = Router();

router.get("/", protectedRoute, getAllCatalogue);

router.get("/categories", getAllCatalogueCategories);

router.get("/create", createCatalogues);

export { router as CatalogueRouter };
