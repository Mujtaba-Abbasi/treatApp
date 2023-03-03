const Treat = require("../Models/treatModel");
const mongoose = require('mongoose')

//* Get all workouts
const getTreats = async (req, res) => {
  const treats = await Treat.find({}).sort({
    createdAt: -1
  });
  res.status(200).json(treats);
};

//* Search a workout
const searchTreat = async (req, res) => {
  const {
    id
  } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      error: "Treat not found!"
    });
  }

  const treat = await Treat.findById(id);

  if (!treat) {
    return res.status(400).json({
      error: "Treat not found!"
    });
  }

  res.status(200).json(treat);
};

//* Delete a treat
const deleteTreat = async (req, res) => {
  const {
    id
  } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      error: "Treat not found!"
    });
  }

  const treat = await Treat.findByIdAndDelete(id);

  if (!treat) {
    return res.status(400).json({
      error: "Treat not found!"
    });
  }

  res.status(200).json(treat);
};

//* Update a treat
const updateTreat = async (req, res) => {
  const {
    id
  } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      error: "Treat not found!"
    });
  }

  const treat = await Treat.findByIdAndUpdate(id, {
    title: req.body.title,
    description: req.body.description,
    host: req.body.host,
    status: req.body.status,
  });

  if (!treat) {
    return res.status(400).json({
      error: "Treat not found!"
    });
  }


  res.status(200).json(treat);
};

//* Create a treat
const createTreat = async (req, res) => {
  const {
    title,
    description,
    host,
    status
  } = req.body;

  try {
    const treat = await Treat.create({
      title,
      description,
      host,
      status
    });
    res.status(200).json(treat);
  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
};

module.exports = {
  getTreats,
  searchTreat,
  createTreat,
  deleteTreat,
  updateTreat,
};