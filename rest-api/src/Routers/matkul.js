const express = require("express");
const matkulRouter = express.Router();
const matkulController = require("../Controllers/matkul");

//Create method
matkulRouter.post("/", matkulController.addMatkul);
//Read method
matkulRouter.get("/", matkulController.getMatkul);
//Update Method
matkulRouter.patch("/:id", matkulController.updateMatkul);
//Delete method
matkulRouter.delete("/:id", matkulController.deleteMatkul);
//export
module.exports = matkulRouter;
