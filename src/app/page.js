'use client'
import LandingScreen from "./components/Header/Header";
import "./page.module.css";
import ImageCarousel from "./ImageCarousel";
import React from "react";
import HeaderTem from "./components/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomFooter from "./components/footer/footer";

export default function Home() {
  return (
    <div className="MainContainer">
      <HeaderTem></HeaderTem>
      <div className="carouselContainer">
        <ImageCarousel></ImageCarousel>
      </div>
      {/* <CustomFooter></CustomFooter> */}
    </div>
  );
}
