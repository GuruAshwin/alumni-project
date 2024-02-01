'use client';
import "./page.module.css";
import HomeScreen from "./components/LandingPage/HomeScreen";
import React from "react";
import HeaderTem from "./components/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomFooter from "./components/footer/footer";
import EventImage from "./components/eventImage/eventImage";
import CollegeSlider from "./components/college_slider/collgeslider";

export default function Home() {
  return (
    <div className="MainContainer">
      <HeaderTem></HeaderTem>
      <div className="carouselContainer">
        <HomeScreen></HomeScreen>
      </div>
      <div>
        <EventImage></EventImage>
      </div>
      <div>
        <CollegeSlider></CollegeSlider>
      </div>
      <CustomFooter></CustomFooter>
    </div>
  );
}
