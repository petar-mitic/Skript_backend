import mongoose from "mongoose";

const motor = mongoose.Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  range: { type: Number, required: true },
  price: { type: Number, required: true }
});

const Motor = mongoose.model("Motor", motor);

export default Motor;
