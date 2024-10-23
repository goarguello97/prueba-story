import express from "express";
import UserController from "../controllers/UserController.js";
import getToken from "../middleware/getToken.js";
import isAdmin from "../middleware/isAdmin.js";

const userRouter = express.Router();

userRouter.get("/", UserController.getUsers);
userRouter.get("/user/:id", UserController.getUserById);
userRouter.post("/", UserController.addUser);
userRouter.put("/user/:id", getToken, isAdmin, UserController.updateUser);
userRouter.delete("/user/:id", getToken, isAdmin, UserController.deleteUser);
userRouter.post("/login", UserController.loginUser);
userRouter.get("/me/:token", getToken, UserController.me);
userRouter.get("/logout", getToken, UserController.logoutUser);

export default userRouter;
