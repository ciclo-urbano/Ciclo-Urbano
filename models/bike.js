const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bikeSchema = new Schema(
  {
    model: { type: String, required: true },
    make: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    color: { type: String, required: false },
    price: { type: Number, required: true },
    size: { type: String, required: true },
    imageURL: { type: String, required: true },
    isSold: { type: Boolean},
    onHold: { type: Boolean},
    builderID: { type: Schema.Types.ObjectId, ref: 'User'},
    checkerID: { type: Schema.Types.ObjectId, ref: 'User'}
  },
  { timestamps: true }
);

module.exports = mongoose.model("Bike", bikeSchema, "bikes");