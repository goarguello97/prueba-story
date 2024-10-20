import express from "express";
import ProductController from "../controllers/ProductController.js";
import isAdmin from "../middleware/isAdmin.js";
import validateCookie from "../middleware/validateCookie.js";

const productRouter = express.Router();

productRouter.get("/", ProductController.getProduct);
productRouter.post("/", validateCookie, isAdmin, ProductController.addProduct);
productRouter.get("/:id", ProductController.getProductId);
productRouter.put(
  "/:id",
  validateCookie,
  isAdmin,
  ProductController.updateProduct
);
productRouter.delete(
  "/:id",
  validateCookie,
  isAdmin,
  ProductController.deleteProduct
);

export default productRouter;
