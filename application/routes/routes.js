import express from "express";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile("index.html", { root: "./static" });
});

router.get("/login", (req, res) => {
  res.sendFile("login.html", { root: "./static" });
});

router.get("/cars", (req, res) => {
  res.sendFile("models/cars/cars.html", { root: "./static" });
});

router.get("/trucks", (req, res) => {
  res.sendFile("models/trucks/trucks.html", { root: "./static" });
});

router.get("/motors", (req, res) => {
  res.sendFile("models/motors/motors.html", { root: "./static" });
});

router.get("/users", (req, res) => {
  res.sendFile("models/users/users.html", { root: "./static" });
});

export default router;
