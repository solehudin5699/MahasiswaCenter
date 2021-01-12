import React, { useEffect } from "react";
import "./courses.css";
import { Table } from "react-bootstrap";
import AddButton from "../components/Courses/AddButton";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { keepMahasiswa } from "../redux/actions/mahasiswa";
import { useSelector, useDispatch } from "react-redux";

let data = [
  {
    nim: "1340862626",
    name: "Solehudin",
    semester: 3,
    major: "Fisika",
  },
  {
    nim: "1340862626",
    name: "Solehudin",
    semester: 3,
    major: "Fisika",
  },
  {
    nim: "1340862626",
    name: "Solehudin",
    semester: 3,
    major: "Fisika",
  },
  {
    nim: "1340862626",
    name: "Solehudin",
    semester: 3,
    major: "Fisika",
  },
  {
    nim: "1340862626",
    name: "Solehudin",
    semester: 3,
    major: "Fisika",
  },
  {
    nim: "1340862626",
    name: "Solehudin",
    semester: 3,
    major: "Fisika",
  },
  {
    nim: "1340862626",
    name: "Solehudin",
    semester: 3,
    major: "Fisika",
  },
  {
    nim: "1340862626",
    name: "Solehudin",
    semester: 3,
    major: "Fisika",
  },
  {
    nim: "1340862626",
    name: "Solehudin",
    semester: 3,
    major: "Fisika",
  },
  {
    nim: "1340862626",
    name: "Solehudin",
    semester: 3,
    major: "Fisika",
  },
  {
    nim: "1340862626",
    name: "Solehudin",
    semester: 3,
    major: "Fisika",
  },
  {
    nim: "1340862626",
    name: "Solehudin",
    semester: 3,
    major: "Fisika",
  },
];
export default function Students() {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_APIURL}/mahasiswa/`)
      .then((res) => {
        const data = res.data.data;
        this.setState({ products });
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className='containerCourses'>
      <h1 className='directory'>
        <IconButton
          style={{ outline: "none" }}
          onClick={() => history.goBack()}>
          <ArrowBackIcon />
        </IconButton>
        Mahasiswa
      </h1>
      <div className='contenttable'>
        <Table responsive='md' className='table' borderless>
          <thead>
            <tr className='headertable'>
              <th className='table_colum1'>No</th>
              <th className='table_colum2'>NIM</th>
              <th className='table_colum3'>Nama</th>
              <th className='table_colum4'>Semester</th>
              <th className='table_colum5'>Jurusan</th>
              <th className='table_colum5'>Edit</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr className='rowbody'>
                  <td>{index + 1} </td>
                  <td>{item.nim}</td>
                  <td>{item.name}</td>
                  <td>{item.semester}</td>
                  <td>{item.major}</td>
                  <td className='btn_action'>
                    <button style={{ outline: "none" }} className='btn_update'>
                      Perbarui
                    </button>
                    <button style={{ outline: "none" }} className='btn_delete'>
                      Hapus
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
  );
}
