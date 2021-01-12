/* eslint-disable */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { keepMatkul } from "../../redux/actions/matkul";
import { useSelector, useDispatch } from "react-redux";

import { Modal } from "react-bootstrap";
import "./modal.css";

export default function EditCourses(props) {
  const [matakuliah, setMatkul] = useState({
    id: "",
    kode: "",
    matakuliah: "",
    semester: "",
    jurusanID: "",
  });
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const handleUpdate = () => {
    setLoading(true);
    let body = {
      kode: matakuliah.kode,
      matakuliah: matakuliah.matakuliah,
      semester: Number(matakuliah.semester),
      jurusanID: Number(matakuliah.jurusanID),
    };
    return axios
      .patch(
        `${process.env.REACT_APP_APIURL}/matakuliah/${matakuliah.id}`,
        body
      )
      .then((res) => {
        axios
          .get(`${process.env.REACT_APP_APIURL}/matakuliah/`)
          .then((res) => {
            const data = res.data.data;
            dispatch(keepMatkul(data));
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
      setMatkul({
        id: props.data.id,
        kode: props.data.kode,
        matakuliah: props.data.matakuliah,
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
              <h6>Kode MK</h6>
            </div>
            <div className='at_input'>
              <input
                type='text'
                value={matakuliah.kode}
                onChange={(e) =>
                  setMatkul({ ...matakuliah, kode: e.target.value })
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
                value={matakuliah.semester}
                onChange={(e) =>
                  setMatkul({ ...matakuliah, semester: e.target.value })
                }
              />
            </div>
          </div>
          <div className='at_line'>
            <div className='at_label'>
              <h6>Matakuliah</h6>
            </div>
            <div className='at_input'>
              <input
                type='text'
                value={matakuliah.matakuliah}
                onChange={(e) =>
                  setMatkul({ ...matakuliah, matakuliah: e.target.value })
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
                value={props.show ? matakuliah.jurusanID : null}
                onChange={(e) =>
                  setMatkul({ ...matakuliah, jurusanID: e.target.value })
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
