const dbConnect = require("../Configs/dbConnect");

const matkulModel = {
  //CREATE METHOD
  addMatkul: (body) => {
    return new Promise((resolve, reject) => {
      let postQuery = `INSERT INTO matakuliah SET ?`;
      dbConnect.query(postQuery, body, (error, result) => {
        if (!error) {
          resolve(result);
        } else {
          reject(error);
        }
      });
    });
  },

  //READ METHOD
  getMatkul: () => {
    return new Promise((resolve, reject) => {
      let queryString = `SELECT matkul.id, matkul.kode, matkul.matakuliah, matkul.semester, matkul.jurusanID, jurusan.jurusan FROM matakuliah as matkul JOIN jurusan ON matkul.jurusanID=jurusan.id ORDER BY matkul.id ASC`;

      dbConnect.query(queryString, (err, data) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  },

  //UPDATE METHOD
  updateMatkul: (body, params) => {
    return new Promise((resolve, reject) => {
      const { id } = params;
      let updateQuery = `UPDATE matakuliah SET ? WHERE id=${id}`;
      dbConnect.query(updateQuery, body, (error, result) => {
        if (!error) {
          resolve({
            ...result,
            msg: "Success updating courses",
          });
        } else {
          reject({ msg: "Error updating courses" });
        }
      });
    });
  },

  //DELETE METHOD
  deleteMatkul: (params) => {
    return new Promise((resolve, reject) => {
      const { id } = params;
      let deleteQuery = "DELETE FROM matakuliah WHERE id=?";
      dbConnect.query(deleteQuery, [id], (error, result) => {
        if (!error) {
          resolve({
            msg: "Success deleting courses",
          });
        } else {
          reject({ msg: "Error" });
        }
      });
    });
  },
};

module.exports = matkulModel;
