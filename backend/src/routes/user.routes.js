import express from "express";
import { register } from "../controllers/index.js";
import { validateRegister } from "../middlewares/index.js"

const router = express.Router();

router.post("/create", validateRegister, register);

export default router;