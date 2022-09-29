const express = require("express");
const {
  getTreats,
  searchTreat,
  createTreat,
  deleteTreat,
  updateTreat,
} = require("../Controllers/workoutControllers");

const router = express.Router();

router.get("/", getTreats);

router.get("/:id", searchTreat);

router.post("/", createTreat);

router.delete("/:id", deleteTreat);

router.patch("/:id", updateTreat );

module.exports = router;
