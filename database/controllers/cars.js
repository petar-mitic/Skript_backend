import Car from "../models/carModel.js";
import { checkEnrty } from "../validation/validation.js";

export const addCar = async (req, res) => {
  const { brand, model, year, range, price } = req.body;
  
  if(!checkEnrty(brand, model, year,range, price, res)){
    return;
  }

  try {
    const car = await Car.findOne({
      brand : brand,
      model : model,
      year : year,
      range : range,
      price : price,
    });
    if (car) {
      res.status(400).json({ message: "Vec ima u bazi" });
      return;
    }
    const newCar = new Car({
      brand : brand,
      model : model,
      year : year,
      range : range,
      price : price,
    });
    await newCar.save();
    res.status(200).json({ message: "Sacuvano u bazi" });
    return;
  } catch (error) {
    res.status(400).json({ message: error.message });
    console.log("ovde");
    return;
  }
};

export const getCar = async (req, res) => {
  try {
    const cars = await Car.find();
    if (!cars) {
      res
        .status(400)
        .json({ message: "Nema u bazi" });
      return;
    }
    res.status(200).json(cars);
  } catch (error) {
    res.status(400).json({ message: error.message });
    return;
  }
};

export const deleteCar = async (req, res) => {
  const carId = req.body.carId;
  try {
    const car = await Car.findById(carId);
    if (!car) {
      res.status(400).json({ message: "Auto ne postoji" });
      return;
    }
    await Car.findByIdAndDelete(carId);
    res
      .status(200)
      .json({ message: "Obrisan auto" });
  } catch (error) {
    res.status(400).json({ message: error.messsage });
    return;
  }
};

export const updateCar = async (req, res) => {
  const carId = req.body.carId;
  const changedParameters = req.body;
  try {
    const car = await Car.findById(carId);
    if (!car) {
      res
        .status(400)
        .json({ message: "Auto ne postoji" });
      return;
    }
    const newcar = await Car.findByIdAndUpdate(car._id, changedParameters);
    res.status(200).json({message: "Auto je izmenjen"});
  } catch (error) {
    res.status(400).json({ message: error.message });
    return;
  }
};