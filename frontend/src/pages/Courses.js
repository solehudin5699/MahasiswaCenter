import React from "react";
import "./courses.css";
import { Table } from "react-bootstrap";
import AddButton from "../components/Courses/AddButton";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory } from "react-router-dom";

let data = [
  {
    code: "1A29B",
    semester: 1,
    name: "Komputer",
    major: "Fisika",
  },
  {
    code: "1A29C",
    semester: 2,
    name: "Energi",
    major: "Fisika",
  },
  {
    code: "1A29D",
    semester: 5,
    name: "Material Lanjut",
    major: "Fisika",
  },
  {
    code: "1A29E",
    semester: 1,
    name: "Biologi Dasar",
    major: "Biologi",
  },
];
export default function Courses() {
  const history = useHistory();
  return (
    <div className='containerCourses'>
      <h1 className='directory'>
        <IconButton
          style={{ outline: "none" }}
          onClick={() => history.goBack()}>
          <ArrowBackIcon />
        </IconButton>
        Mata Kuliah
      </h1>
      <div className='contenttable'>
        <Table responsive='md' className='table' borderless>
          <thead>
            <tr className='headertable'>
              <th className='table_colum1'>No</th>
              <th className='table_colum2'>Kode</th>
              <th className='table_colum3'>Semester</th>
              <th className='table_colum4'>Mata Kuliah</th>
              <th className='table_colum5'>Jurusan</th>
              <th className='table_colum5'>Edit</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr className='rowbody'>
                  <td>{index + 1} </td>
                  <td>{item.code}</td>
                  <td>{item.semester}</td>
                  <td>{item.name}</td>
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
