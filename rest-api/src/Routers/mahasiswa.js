const express = require("express");
const mhsRouter = express.Router();
const mhsController = require("../Controllers/mahasiswa");

//Create method
mhsRouter.post("/", mhsController.addMahasiswa);
//Read method
mhsRouter.get("/", mhsController.getMahasiswa);
//Update Method
mhsRouter.patch("/:id", mhsController.updateMahasiswa);
//Delete method
mhsRouter.delete("/:id", mhsController.deleteMahasiswa);
//export
module.exports = mhsRouter;
