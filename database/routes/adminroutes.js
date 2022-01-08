import express from 'express';
import {addCar, getCar, deleteCar, updateCar} from '../controllers/cars.js';
import {addTruck, getTruck, deleteTruck, updateTruck} from '../controllers/trucks.js';
import {addMotor, getMotor, deleteMotor, updateMotor} from '../controllers/motors.js';
import {getUser, deleteUser, banUser, unbanUser} from "../controllers/users.js";

import {verify, checkAdmin} from '../verification/auth.js';

const router = express.Router();

router.get("/cars/get", verify, getCar);
router.post("/cars/update", verify, updateCar);
router.delete("/cars/delete",verify, deleteCar);
router.post("/cars/add",verify, addCar);

router.get("/motors/get",verify, getMotor);
router.post("/motors/update",verify, updateMotor);
router.delete("/motors/delete",verify, deleteMotor);
router.post("/motors/add",verify, addMotor);

router.get("/trucks/get",verify, getTruck);
router.post("/trucks/update",verify, updateTruck);
router.delete("/trucks/delete",verify, deleteTruck);
router.post("/trucks/add",verify, addTruck);

router.get("/users/get", verify, checkAdmin, getUser);
router.delete("/users/delete", verify, checkAdmin, deleteUser);
router.post("/users/ban", verify, checkAdmin, banUser);
router.post("/users/unban", verify, checkAdmin, unbanUser);

export default router;
