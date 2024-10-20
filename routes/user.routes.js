import express from "express";
import UserController from "../controllers/UserController.js";

const userRouter = express.Router();

userRouter.get("/", UserController.getUsers);
userRouter.get("/:id", UserController.getUserById);
userRouter.post("/", UserController.addUser);
userRouter.put("/:id", UserController.updateUser);
userRouter.delete("/:id", UserController.deleteUser);
userRouter.post("/login", UserController.loginUser);

export default userRouter;
