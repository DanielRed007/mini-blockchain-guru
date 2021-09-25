
import express from "express";
import userController from "../controller/user.controller";

const router = express.Router();

router.post("/login", userController.authenticateUser);

export default router;