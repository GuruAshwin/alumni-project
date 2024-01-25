'use client'
import LandingScreen from "./components/Header/Header";
import "./page.module.css";
import ImageCarousel from "./ImageCarousel";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div className="MainContainer">
      <LandingScreen></LandingScreen>
      <ImageCarousel></ImageCarousel>
    </div>
  );
}
