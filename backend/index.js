import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productRouteTesting from "./routes/productRouteTesting.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/products", productRouteTesting);

app.listen(process.env.APP_PORT, () => {
  console.log("Server up and running...");
});
