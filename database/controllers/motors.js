import Motor from "../models/motorModel.js";
import { checkEnrty } from "../validation/validation.js";

export const addMotor = async (req, res) => {
  const { brand, model, year, range, price } = req.body;
  
  if(!checkEnrty(brand, model, year,range, price, res)){
    return;
  }

  try {
    const motor = await Motor.findOne({
      brand : brand,
      model : model,
      year : year,
      range : range,
      price : price,
    });
    if (motor) {
      res.status(400).json({ message: "Vec ima u bazi" });
      return;
    }
    const newMotor = new Motor({
      brand : brand,
      model : model,
      year : year,
      range : range,
      price : price,
    });
    await newMotor.save();
    res.status(200).json({ message: "Sacuvano u bazi" });
    return;
  } catch (error) {
    res.status(400).json({ message: error.message });
    console.log("ovde");
    return;
  }
};

export const getMotor = async (req, res) => {
  try {
    const motors = await Motor.find();
    if (!motors) {
      res
        .status(400)
        .json({ message: "Nema u bazi" });
      return;
    }
    res.status(200).json(motors);
  } catch (error) {
    res.status(400).json({ message: error.message });
    return;
  }
};

export const deleteMotor = async (req, res) => {
  const motorId = req.body.motorId;
  try {
    const motor = await Motor.findById(motorId);
    if (!motor) {
      res.status(400).json({ message: "Motor ne postoji" });
      return;
    }
    await Motor.findByIdAndDelete(motorId);
    res
      .status(200)
      .json({ message: "Obrisan motor" });
  } catch (error) {
    res.status(400).json({ message: error.messsage });
    return;
  }
};

export const updateMotor = async (req, res) => {
  const motorId = req.body.motorId;
  const changedParameters = req.body;
  try {
    const motor = await Motor.findById(motorId);
    if (!motor) {
      res
        .status(400)
        .json({ message: "Motor ne postoji" });
      return;
    }
    const newmotor = await Motor.findByIdAndUpdate(motor._id, changedParameters);
    res.status(200).json({message: "Motor je izmenjen"});
  } catch (error) {
    res.status(400).json({ message: error.message });
    return;
  }
};