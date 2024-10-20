import express from "express";
import brandRouter from "./brand.routes.js";
import productRouter from "./product.routes.js";
import userRouter from "./user.routes.js";
const router = express.Router();

router.use("/products", productRouter);
router.use("/brands", brandRouter);
router.use("/users", userRouter);

export default router;
