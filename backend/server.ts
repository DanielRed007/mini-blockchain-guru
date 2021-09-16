import express from "express";
import cors from "cors";

const port = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.send("Api OK!");
});

app.listen(port, () => {
    console.log(`Server running in ${process.env.NODE_ENV} on port: ${port}`);
});