import express from "express";
import ProductController from "../controllers/ProductController.js";
import getToken from "../middleware/getToken.js";
import isAdmin from "../middleware/isAdmin.js";

const productRouter = express.Router();

productRouter.get("/", ProductController.getProduct);
productRouter.post("/", getToken, isAdmin, ProductController.addProduct);
productRouter.get("/product/:id", ProductController.getProductId);
productRouter.put("/:id", getToken, isAdmin, ProductController.updateProduct);
productRouter.delete(
  "/:id",
  getToken,
  isAdmin,
  ProductController.deleteProduct
);

export default productRouter;
