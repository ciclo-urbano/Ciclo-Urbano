const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bikeSchema = new Schema(
  {
    model: { type: String, required: true },
    make: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    color: { type: String, required: false },
    price: { type: String, required: true },
    size: { type: String, required: true },
    imageURL: { type: String, required: true },
    isSold: { type: Boolean, required: false },
    onHold: { type: Boolean, required: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Bike", bikeSchema);