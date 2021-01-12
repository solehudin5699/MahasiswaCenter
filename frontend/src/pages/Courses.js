import React, { useEffect, useState } from "react";
import "./courses.css";
import { Table } from "react-bootstrap";
import AddButton from "../components/Courses/AddButton";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { keepMatkul } from "../redux/actions/matkul";
import { useSelector, useDispatch } from "react-redux";
import ModalEdit from "../components/Courses/ModalEdit";

export default function Courses() {
  const [show, setShow] = useState(false);
  const [dataUpdate, setDataUpdate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [idDelete, setId] = useState(null);
  const { matkul } = useSelector((state) => state.matkul);
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_APIURL}/matakuliah/`)
      .then((res) => {
        const data = res.data.data;
        dispatch(keepMatkul(data));
      })
      .catch((err) => console.log(err));
  }, []);
  const handleDelete = (id) => {
    setLoading(true);
    setId(id);
    return axios
      .delete(`${process.env.REACT_APP_APIURL}/matakuliah/${id}`)
      .then((res) => {
        setLoading(false);
        const result = res.data.data;
        axios
          .get(`${process.env.REACT_APP_APIURL}/matakuliah/`)
          .then((res) => {
            const data = res.data.data;
            dispatch(keepMatkul(data));
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
          });
      });
  };
  return (
    <>
      <div className='containerCourses'>
        <h1 className='directory'>
          <IconButton
            style={{ outline: "none" }}
            onClick={() => history.goBack()}>
            <ArrowBackIcon />
          </IconButton>
          Matakuliah
        </h1>
        <div className='contenttable'>
          <Table responsive='md' className='table' borderless>
            <thead>
              <tr className='headertable'>
                <th className='table_colum1'>No</th>
                <th className='table_colum2'>Kode MK</th>
                <th className='table_colum3'>Semester</th>
                <th className='table_colum4'>Matakuliah</th>
                <th className='table_colum5'>Jurusan</th>
                <th className='table_colum5'>Edit</th>
              </tr>
            </thead>
            <tbody>
              {matkul.map((item, index) => {
                return (
                  <tr className='rowbody'>
                    <td>{index + 1} </td>
                    <td>{item.kode}</td>
                    <td>{item.semester}</td>
                    <td>{item.matakuliah}</td>
                    <td>{item.jurusan}</td>
                    <td className='btn_action'>
                      <button
                        style={{ outline: "none" }}
                        className='btn_update'
                        onClick={() => {
                          setShow(true);
                          setDataUpdate(item);
                        }}>
                        Perbarui
                      </button>
                      <button
                        style={{ outline: "none" }}
                        className='btn_delete'
                        onClick={() => handleDelete(item.id)}>
                        {loading && idDelete == item.id ? (
                          <i className='fa fa-spinner fa-spin fa-1x fa-fw'></i>
                        ) : (
                          "Hapus"
                        )}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
        <AddButton />
      </div>
      <ModalEdit data={dataUpdate} onHide={setShow} show={show} />
    </>
  );
}
