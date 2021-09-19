
import express from "express";
import currencyController from "../controller/currency.controller";

const router = express.Router();

router.get("/all", currencyController.getAllCurrencies);
router.get("/info/all", currencyController.getAllCurrencyInfo);

export default router;