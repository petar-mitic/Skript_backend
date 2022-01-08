import mongoose from "mongoose";

const truck = mongoose.Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  range: { type: Number, required: true },
  price: { type: Number, required: true }
});

const Truck = mongoose.model("Truck", truck);

export default Truck;
