import { Router } from "express";
import {
  canCreateWebsite,
  getUser,
  logoutUser,
  registerUser,
} from "../controllers/user.controller.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = Router();

router.post("/register-user", registerUser);
router.get("/get-user", verifyToken, getUser);
router.get("/logout-user", verifyToken, logoutUser);
router.get("/can-create-website", verifyToken, canCreateWebsite);

export default router;
