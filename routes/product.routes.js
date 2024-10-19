import express from "express";
import ProductController from "../controllers/ProductController.js";

const productRouter = express.Router();

productRouter.get("/", ProductController.getProduct);
productRouter.post("/", ProductController.addProduct);
productRouter.get("/:id", ProductController.getProductId);
productRouter.put("/:id", ProductController.updateProduct);
productRouter.delete("/:id", ProductController.deleteProduct);

export default productRouter;
