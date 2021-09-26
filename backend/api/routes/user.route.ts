
import express from "express";
import userController from "../controller/user.controller";

const router = express.Router();

router.post("/login", userController.authenticateUser);
router.post("/register", userController.registerUser);

export default router;