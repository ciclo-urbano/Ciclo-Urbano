const db = require("../db/connection.js");
const Bike = require("../models/bike.js");

db.on("error", console.error.bind(console, "mongoDB connection error:"));

const getBikes = async (req, res) => {
  try {
    const bike = await Bike.find();
    res.json(bike);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getBike = async (req, res) => {
  try {
    const bike = await Bike.findById(req.params.id);
    res.json(bike);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const createBike = async (req, res) => {
  try {
    const bike = new Bike(req.body);
    await bike.save();
    return res.status(201).json(bike);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateBike = async (req, res) => {
  try {
    const { id } = req.params;
    await Bike.findByIdAndUpdate(
      id,
      req.body,
      { new: true },
      (err, bike) => {
        if (err) {
          res.status(500).json(err);
        }
        if (!bike) {
          res.status(500).send("Bike not found!");
        }
        return res.status(200).json(bike);
      }
    );
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteBike = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Bike.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Bike deleted");
    }
    throw new Error("Bike not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getBikes,
  getBike,
  createBike,
  updateBike,
  deleteBike,
};
