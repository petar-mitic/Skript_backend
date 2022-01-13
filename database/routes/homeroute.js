import express from "express";
import { goHome } from "../controllers/home.js";

const router = express.Router();

router.get("/", goHome);

export default router;