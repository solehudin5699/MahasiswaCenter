const mhsModel = require("../Models/mahasiswa");
const responseResult = require("../Helpers/formResponse");

const mhsController = {
  //CREATE METHOD
  addMahasiswa: (req, res) => {
    mhsModel
      .addMahasiswa(req.body)
      .then((result) => {
        responseResult.success(res, req.body);
      })
      .catch((error) => {
        responseResult.error(res, error);
      });
  },
  //READ METHOD
  getMahasiswa: (req, res) => {
    mhsModel
      .getMahasiswa()
      .then((result) => {
        responseResult.success(res, result);
      })
      .catch((err) => {
        responseResult.error(res, err);
      });
  },
  //UPDATE METHOD
  updateMahasiswa: (req, res) => {
    mhsModel
      .updateMahasiwa(req.body, req.params)
      .then((result) => {
        if (result.affectedRows !== 0) {
          let detailUpdate = {
            ...req.body,
            id: req.params.id,
          };
          console.log(result);
          responseResult.success(res, detailUpdate);
        } else {
          let msg = `id = ${req.params.id} is not found`;
          responseResult.error(res, { msg });
        }
      })
      .catch((error) => {
        responseResult.error(res, error);
      });
  },
  //DELETE METHOD
  deleteMahasiswa: (req, res) => {
    mhsModel
      .deleteMahasiswa(req.params)
      .then((result) => {
        responseResult.success(res, result);
      })
      .catch((error) => {
        responseResult.error(res, error);
      });
  },
};
module.exports = mhsController;
