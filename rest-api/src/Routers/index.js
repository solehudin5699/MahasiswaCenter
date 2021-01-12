//Package import
const express = require("express");
//Filepath import
const mhsRouter = require("./mahasiswa");
const matkulRouter = require("./matkul");
//Declaration
const indexRouter = express.Router();

//Implementation
indexRouter.use("/mahasiswa", mhsRouter);
indexRouter.use("/matakuliah", matkulRouter);

//Export
module.exports = indexRouter;
