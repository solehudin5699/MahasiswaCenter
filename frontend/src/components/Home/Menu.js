import React from "react";
import "./menu.css";
import courses from "../../assets/images/courses.png";
import students from "../../assets/images/students.png";
import transcript from "../../assets/images/transcript.png";
import { useHistory } from "react-router-dom";

export default function Menu() {
  const history = useHistory();
  return (
    <>
      <div className='menu_container'>
        <div onClick={() => history.push("/matakuliah")} className='menu_item'>
          <div className='menu_itemHeader'>
            <img src={courses} alt='' />
          </div>
          <h1 className='menu_title'>Mata Kuliah</h1>
        </div>
        <div onClick={() => history.push("/mahasiswa")} className='menu_item'>
          <div className='menu_itemHeader'>
            <img src={students} alt='' />
          </div>
          <h1 className='menu_title'>Mahasiswa</h1>
        </div>
        <div onClick={() => history.push("/transkrip")} className='menu_item'>
          <div className='menu_itemHeader'>
            <img src={transcript} alt='' />
          </div>
          <h1 className='menu_title'>Transkrip Nilai</h1>
        </div>
      </div>
    </>
  );
}
