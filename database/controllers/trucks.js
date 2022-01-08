import Truck from "../models/truckModel.js";
import { checkEnrty } from "../validation/validation.js";

export const addTruck = async (req, res) => {
    const { brand, model, year, range, price } = req.body;
    
    if(!checkEnrty(brand, model, year,range, price, res)){
      return;
    }

    try {
      const truck = await Truck.findOne({
        brand : brand,
        model : model,
        year : year,
        range : range,
        price : price,
      });
      if (truck) {
        res.status(400).json({ message: "Vec ima u bazi" });
        return;
      }
      const newTruck = new Truck({
        brand : brand,
        model : model,
        year : year,
        range : range,
        price : price,
      });
      await newTruck.save();
      res.status(200).json({ message: "Sacuvano u bazi" });
      return;
    } catch (error) {
      res.status(400).json({ message: error.message });
      console.log("ovde");
      return;
    }
  };

export const getTruck = async (req, res) => {
  try {
    const trucks = await Truck.find();
    if (!trucks) {
      res
        .status(400)
        .json({ message: "Nema u bazi" });
      return;
    }
    res.status(200).json(trucks);
  } catch (error) {
    res.status(400).json({ message: error.message });
    return;
  }
};

export const deleteTruck = async (req, res) => {
  const truckId = req.body.truckId;
  try {
    const truck = await Truck.findById(truckId);
    if (!truck) {
      res.status(400).json({ message: "Kamion ne postoji" });
      return;
    }
    await Truck.findByIdAndDelete(truckId);
    res
      .status(200)
      .json({ message: "Obrisan kamion" });
  } catch (error) {
    res.status(400).json({ message: error.messsage });
    return;
  }
};

export const updateTruck = async (req, res) => {
  const truckId = req.body.truckId;
  const changedParameters = req.body;
  try {
    const truck = await Truck.findById(truckId);
    if (!truck) {
      res
        .status(400)
        .json({ message: "Kamion ne postoji" });
      return;
    }
    const newtruck = await Truck.findByIdAndUpdate(truck._id, changedParameters);
    res.status(200).json({message: "Kamion je izmenjen"});
  } catch (error) {
    res.status(400).json({ message: error.message });
    return;
  }
};