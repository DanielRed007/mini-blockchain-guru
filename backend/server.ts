import express from "express";
import cors from "cors";
import dotenv from "dotenv";
// Routes
import currency from "./api/routes/currency.route";
// Config
import { connectDB } from "./config/dbConnection";

dotenv.config();
const port = process.env.PORT || 5000;
const app = express();

// MongoDB Connection
connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.send("Api OK!");
});

app.use("/api/currency", currency);

app.listen(port, () => {
    console.log(`Server running in ${process.env.NODE_ENV} on port: ${port}`);
});