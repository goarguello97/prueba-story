import express from "express";
import BrandController from "../controllers/BrandController.js";
import getToken from "../middleware/getToken.js";
import isAdmin from "../middleware/isAdmin.js";

const brandRouter = express.Router();

brandRouter.get("/", BrandController.getBrand);
brandRouter.post("/", getToken, isAdmin, BrandController.addBrand);
brandRouter.get("/brand/:id", BrandController.getBrandId);
brandRouter.put("/:id", getToken, isAdmin, BrandController.updateBrand);
brandRouter.delete("/:id", getToken, isAdmin, BrandController.deleteBrand);

export default brandRouter;
