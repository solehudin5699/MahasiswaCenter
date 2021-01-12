/* eslint-disable */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { keepMahasiswa } from "../../redux/actions/mahasiswa";
import { useSelector, useDispatch } from "react-redux";

import { Modal } from "react-bootstrap";
import "./modal.css";

export default function EditCourses(props) {
  const [student, setStudent] = useState({
    nim: "",
    nama: "",
    semester: "",
    jurusanID: "",
  });
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const handleUpdate = () => {
    setLoading(true);
    let body = {
      nim: student.nim,
      nama: student.nama,
      semester: Number(student.semester),
      jurusanID: Number(student.jurusanID),
    };
    return axios
      .patch(`${process.env.REACT_APP_APIURL}/mahasiswa/${student.id}`, body)
      .then((res) => {
        axios
          .get(`${process.env.REACT_APP_APIURL}/mahasiswa/`)
          .then((res) => {
            const data = res.data.data;
            dispatch(keepMahasiswa(data));
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
          });
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
  useEffect(() => {
    if (props.show) {
      setStudent({
        id: props.data.id,
        nim: props.data.nim,
        nama: props.data.nama,
        semester: props.data.semester,
        jurusanID: props.data.jurusanID,
      });
    }
  }, [props.show]);
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
            <h5>Perbarui Data</h5>
          </div>
          <div className='at_line'>
            <div className='at_label'>
              <h6>NIM</h6>
            </div>
            <div className='at_input'>
              <input
                type='text'
                value={student.nim}
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
                value={student.nama}
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
                value={student.semester}
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
                value={props.show ? student.jurusanID : null}
                onChange={(e) =>
                  setStudent({ ...student, jurusanID: e.target.value })
                }
                name='jurusanID'
                required>
                <optgroup label='Jurusan'>
                  <option value='1'>Matematika</option>
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
              onClick={() => {
                props.onHide(false);
                setLoading(false);
              }}>
              Batal
            </button>
            <button
              className='at_btnAdd'
              style={{ outline: "none" }}
              onClick={handleUpdate}>
              {loading ? (
                <i className='fa fa-spinner fa-spin fa-2x fa-fw'></i>
              ) : (
                "Perbarui"
              )}
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
