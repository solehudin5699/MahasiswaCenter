const matkulModel = require("../Models/matkul");
const responseResult = require("../Helpers/formResponse");

const matkulController = {
  //CREATE METHOD
  addMatkul: (req, res) => {
    matkulModel
      .addMatkul(req.body)
      .then((result) => {
        responseResult.success(res, req.body);
      })
      .catch((error) => {
        responseResult.error(res, error);
      });
  },
  //READ METHOD
  getMatkul: (req, res) => {
    matkulModel
      .getMatkul()
      .then((result) => {
        responseResult.success(res, result);
      })
      .catch((err) => {
        responseResult.error(res, err);
      });
  },
  //UPDATE METHOD
  updateMatkul: (req, res) => {
    matkulModel
      .updateMatkul(req.body, req.params)
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
  deleteMatkul: (req, res) => {
    matkulModel
      .deleteMatkul(req.params)
      .then((result) => {
        responseResult.success(res, result);
      })
      .catch((error) => {
        responseResult.error(res, error);
      });
  },
};
module.exports = matkulController;
