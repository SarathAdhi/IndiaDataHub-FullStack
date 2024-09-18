import { Router } from "express";

import { getExim } from "../controllers/exim.controllers";
import { protectedRoute } from "../middlewares/protected";

const router = Router();

router.get("/", protectedRoute, getExim);

export { router as EximRouter };
