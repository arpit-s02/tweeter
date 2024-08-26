import express from "express";
import { validateSchema } from "../middlewares/index.js"
import { loginSchema, registerSchema, userIdSchema } from "../schemas/index.js";
import { register, login, getUserDetails } from "../controllers/user.controllers.js";

const router = express.Router();

router.post("/register", validateSchema(registerSchema, 'body'), register);

router.post("/login", validateSchema(loginSchema, 'body'), login);

router.get("/:id", validateSchema(userIdSchema, 'params'), getUserDetails);

export default router;