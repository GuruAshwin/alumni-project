'use client';
import "./page.module.css";
import HomeScreen from "./components/LandingPage/HomeScreen";
import React from "react";
import HeaderTem from "./components/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomFooter from "./components/footer/footer";
import eventImage from "./components/eventImage/eventImage";

export default function Home() {
  return (
    <div className="MainContainer">
      <HeaderTem></HeaderTem>
      <div className="carouselContainer">
        <HomeScreen></HomeScreen>
      </div>
      <div className="imgContainer text-center">
        <img src="/event-img.png" className="img-fluid broucher " style={{ maxWidth: '80%' }} alt="Event Image"></img> 
      </div>           
      <CustomFooter></CustomFooter>
    </div>
  );
}
