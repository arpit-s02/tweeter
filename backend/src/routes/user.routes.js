import express from "express";
import { register } from "../controllers/index.js";
import { validateSchema } from "../middlewares/index.js"
import { registerSchema } from "../schemas/index.js";

const router = express.Router();

router.post("/create", validateSchema(registerSchema), register);

export default router;