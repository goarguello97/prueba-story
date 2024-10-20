import express from "express";
import BrandController from "../controllers/BrandController.js";
import isAdmin from "../middleware/isAdmin.js";
import validateCookie from "../middleware/validateCookie.js";

const brandRouter = express.Router();

brandRouter.get("/", BrandController.getBrand);
brandRouter.post("/", validateCookie, isAdmin, BrandController.addBrand);
brandRouter.get("/:id", BrandController.getBrandId);
brandRouter.put("/:id", validateCookie, isAdmin, BrandController.updateBrand);
brandRouter.delete(
  "/:id",
  validateCookie,
  isAdmin,
  BrandController.deleteBrand
);

export default brandRouter;
