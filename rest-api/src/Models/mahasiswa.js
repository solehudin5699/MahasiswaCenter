const dbConnect = require("../Configs/dbConnect");

const mhsModel = {
  //CREATE METHOD
  addMahasiswa: (body) => {
    return new Promise((resolve, reject) => {
      let postQuery = `INSERT INTO mahasiswa SET ?`;
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
  getMahasiswa: () => {
    return new Promise((resolve, reject) => {
      let queryString = `SELECT mhs.id, mhs.nim, mhs.nama, mhs.semester,mhs.jurusanID, jurusan.jurusan FROM mahasiswa as mhs JOIN jurusan ON mhs.jurusanID=jurusan.id ORDER BY mhs.id ASC`;

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
  updateMahasiwa: (body, params) => {
    return new Promise((resolve, reject) => {
      const { id } = params;
      let updateQuery = `UPDATE mahasiswa SET ? WHERE id=${id}`;
      dbConnect.query(updateQuery, body, (error, result) => {
        if (!error) {
          resolve({
            ...result,
            msg: "Success updating students",
          });
        } else {
          reject({ msg: "Error updating students" });
        }
      });
    });
  },

  //DELETE METHOD
  deleteMahasiswa: (params) => {
    return new Promise((resolve, reject) => {
      const { id } = params;
      let deleteQuery = "DELETE FROM mahasiswa WHERE id=?";
      dbConnect.query(deleteQuery, [id], (error, result) => {
        if (!error) {
          resolve({
            msg: "Success deleting students",
          });
        } else {
          reject({ msg: "Error" });
        }
      });
    });
  },
};

module.exports = mhsModel;
