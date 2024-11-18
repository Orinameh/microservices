import { Router } from "express";
import { register, login } from "../controllers/AuthController";

const userRouter = Router();

userRouter.post("/register", (req, res) => {
  register(req, res);
});
userRouter.post("/login", (req, res) => {
  login(req, res);
});

export default userRouter;
