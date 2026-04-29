import { Router } from "express";
import * as authControllers from "../controllers/auth-controllers.js";

const router = Router();

router.post("/register", authControllers.handleRegister);
router.post("/login", authControllers.handleLogin);

export default router;
