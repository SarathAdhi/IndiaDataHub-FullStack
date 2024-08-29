import { Router } from "express";
import {
  userChangePassword,
  userLogin,
  userRegister,
} from "../controllers/auth.controllers";
import { protectedRoute } from "../middlewares/protected";
import { responseHandler } from "../utils/response-handler";

const router = Router();

router.post("/login", userLogin);
router.post("/register", userRegister);

router.post("/reset-password", protectedRoute, userChangePassword);

router.get("/verify", protectedRoute, function (req, res, next) {
  return responseHandler(res).success(200, "", req?.user);
});

export { router as AuthRouter };
