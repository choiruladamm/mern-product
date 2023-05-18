import express from "express";
import {
  getProducts,
  getProductById,
  deleteProduct,
} from "../controllers/ProductController.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProductById);

export default router;
