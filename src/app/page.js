'use client';
import "./page.module.css";
import ImageCarousel from "./ImageCarousel";
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
        <ImageCarousel></ImageCarousel>
      </div>
      <div className="imgContainer">
        <img src="/event-img.png" className="image"></img> 
      </div>
           
      <CustomFooter></CustomFooter>
    </div>
  );
}
