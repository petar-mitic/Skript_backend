import mongoose from "mongoose";

const car = mongoose.Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  range: { type: Number, required: true },
  price: { type: Number, required: true }
});

const Car = mongoose.model("Car", car);

export default Car;
