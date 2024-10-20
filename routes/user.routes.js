import express from "express";
import UserController from "../controllers/UserController.js";
import isAdmin from "../middleware/isAdmin.js";
import validateCookie from "../middleware/validateCookie.js";

const userRouter = express.Router();

userRouter.get("/", UserController.getUsers);
userRouter.get("/user/:id", UserController.getUserById);
userRouter.post("/", UserController.addUser);
userRouter.put("/user/:id", validateCookie, isAdmin, UserController.updateUser);
userRouter.delete(
  "/user/:id",
  validateCookie,
  isAdmin,
  UserController.deleteUser
);
userRouter.post("/login", UserController.loginUser);
userRouter.get("/me", validateCookie, UserController.me);
userRouter.get("/logout", validateCookie, UserController.logoutUser);

export default userRouter;
