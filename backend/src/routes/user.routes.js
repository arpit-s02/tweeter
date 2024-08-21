import express from "express";
import { validateSchema } from "../middlewares/index.js"
import { loginSchema, registerSchema } from "../schemas/index.js";
import { register, login } from "../controllers/user.controllers.js";

const router = express.Router();

router.post("/register", validateSchema(registerSchema), register);

router.post("/login", validateSchema(loginSchema), login);

export default router;