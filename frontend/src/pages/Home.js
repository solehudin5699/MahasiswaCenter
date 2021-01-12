import React from "react";
import "./home.css";
import Menu from "../components/Home/Menu";
import logoIpb from "../assets/images/logoipb.png";

export default function Home() {
  return (
    <div className='containerHome'>
      <img className='logoipb' src={logoIpb} alt='' />
      <h1 className='title'>IPB University</h1>
      <Menu />
    </div>
  );
}
