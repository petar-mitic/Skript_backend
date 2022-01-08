import express from 'express';
import { addCar, getCar, deleteCar, updateCar } from '../controllers/cars.js';
import { addTruck, getTruck, deleteTruck, updateTruck } from '../controllers/trucks.js';
import { addMotor, getMotor, deleteMotor, updateMotor } from '../controllers/motors.js';
import { authenticate, checkAdmin, checkModerator } from '../middleware/auth.js';

const router = express.Router();

router.get("/cars/get", getCar);
router.post("/cars/update", updateCar);
router.delete("/cars/delete", deleteCar);
router.post("/cars/add", addCar);

router.get("/motors/get", getMotor);
router.post("/motors/update", updateMotor);
router.delete("/motors/delete", deleteMotor);
router.post("/motors/add", addMotor);

router.get("/trucks/get", getTruck);
router.post("/trucks/update", updateTruck);
router.delete("/trucks/delete", deleteTruck);
router.post("/trucks/add", addTruck);


export default router;
