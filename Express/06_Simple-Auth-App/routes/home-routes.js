import { Router } from "express";
import { authMiddleware } from "../middlewares/auth-middleware.js";

const router = Router();

router.get("/home", authMiddleware, (req, res) => {
  let { username, role } = req.userInfo;

  res.status(200).json({
    success: true,
    message: "Welcome to home page",
    data: {
      username,
      role,
    },
  });
});

export default router;
