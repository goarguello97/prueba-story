import express from "express";
import BrandController from "../controllers/BrandController.js";

const brandRouter = express.Router();

brandRouter.get("/", BrandController.getBrand);
brandRouter.post("/", BrandController.addBrand);
brandRouter.get("/:id", BrandController.getBrandId);
brandRouter.put("/:id", BrandController.updateBrand);
brandRouter.delete("/:id", BrandController.deleteBrand);

export default brandRouter;
