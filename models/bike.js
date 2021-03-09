const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bikeSchema = new Schema(
  {
    model: { type: String, required: true },
    make: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    size: { type: String, required: true },
    image_url: { type: String, required: true },
    isSold: { type: Boolean, required: true },
    onHold: { type: Boolean, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Bike", bikeSchema);