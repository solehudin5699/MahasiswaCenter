/* eslint-disable */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { keepMahasiswa } from "../../redux/actions/mahasiswa";
import { useSelector, useDispatch } from "react-redux";

import { Modal } from "react-bootstrap";
import "./modal.css";

export default function AddCourses(props) {
  const [student, setStudent] = useState({
    nim: "",
    nama: "",
    semester: "",
    jurusanID: "",
  });
  const dispatch = useDispatch();
  const { mahasiswa } = useSelector((state) => state.mahasiswa);
  const [loading, setLoading] = useState(false);
  const handleAdd = () => {
    setLoading(true);
    let body = {
      nim: student.nim,
      nama: student.nama,
      semester: Number(student.semester),
      jurusanID: Number(student.jurusanID),
    };
    return axios
      .post(`${process.env.REACT_APP_APIURL}/mahasiswa/`, body)
      .then((res) => {
        let jurusan;
        switch (res.data.data.jurusanID) {
          case 1:
            jurusan = "Matematika";
          case 2:
            jurusan = "Kimia";
          case 3:
            jurusan = "Fisika";
          case 4:
            jurusan = "Biologi";
          case 5:
            jurusan = "Geofisika";
          case 6:
            jurusan = "Statistika";
          case 7:
            jurusan = "Teknik Elektro";
          case 8:
            jurusan = "Teknik Informatika";
          case 9:
            jurusan = "Farmasi";
          case 10:
            jurusan = "Teknik Pangan";
          default:
            null;
        }
        const newMhs = { ...res.data.data, jurusan };
        const data = [...mahasiswa, newMhs];
        dispatch(keepMahasiswa(data));
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  useEffect(() => {
    if (!loading) {
      props.onHide(false);
    }
  }, [loading]);
  return (
    <Modal
      {...props}
      style={{ zIndex: 1500, outline: "none" }}
      size='md'
      aria-labelledby='contained-modal-title-vcenter'
      centered>
      <Modal.Body>
        <div className='attodo_container'>
          <div className='at_line linetitle'>
            <h5>Daftarkan/Tambahkan Mahasiswa</h5>
          </div>
          <div className='at_line'>
            <div className='at_label'>
              <h6>NIM</h6>
            </div>
            <div className='at_input'>
              <input
                type='text'
                onChange={(e) =>
                  setStudent({ ...student, nim: e.target.value })
                }
              />
            </div>
          </div>
          <div className='at_line'>
            <div className='at_label'>
              <h6>Nama</h6>
            </div>
            <div className='at_input'>
              <input
                type='text'
                onChange={(e) =>
                  setStudent({ ...student, nama: e.target.value })
                }
              />
            </div>
          </div>
          <div className='at_line'>
            <div className='at_label'>
              <h6>Semester</h6>
            </div>
            <div className='at_input'>
              <input
                type='text'
                onChange={(e) =>
                  setStudent({ ...student, semester: e.target.value })
                }
              />
            </div>
          </div>
          <div className='at_line'>
            <div className='at_label'>
              <h6>Jurusan</h6>
            </div>
            <div className='at_input'>
              <select
                name='category'
                placeholder='Jurusan'
                onChange={(e) =>
                  setStudent({ ...student, jurusanID: e.target.value })
                }
                name='jurusanID'
                required>
                <optgroup label='Jurusan'>
                  <option value='1' selected>
                    Matematika
                  </option>
                  <option value='2'>Kimia</option>
                  <option value='3'>Fisika</option>
                  <option value='4'>Biologi</option>
                  <option value='5'>Geofisika</option>
                  <option value='6'>Statistika</option>
                  <option value='7'>Teknik Elektro</option>
                  <option value='8'>Teknik Informatika</option>
                  <option value='9'>Farmasi</option>
                  <option value='10'>Teknik Pangan</option>
                </optgroup>
              </select>
            </div>
          </div>

          <div className='at_line linebtn'>
            <button
              className='at_btnCancel marginRight15'
              style={{ outline: "none" }}
              onClick={() => props.onHide(false)}>
              Batal
            </button>
            <button
              className='at_btnAdd'
              style={{ outline: "none" }}
              onClick={handleAdd}>
              {loading ? (
                <i className='fa fa-spinner fa-spin fa-2x fa-fw'></i>
              ) : (
                "Tambah"
              )}
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
