'use client';
import "./page.module.css";
import HomeScreen from "./components/LandingPage/HomeScreen";
import React from "react";
import HeaderTem from "./components/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomFooter from "./components/footer/footer";
import EventImage from "./components/eventImage/eventImage";
import CollegeSlider from "./components/NotableAlumni/notablealumni";
import VideoPlayer from "./components/homevid/homevid";
import TestimonialSlider from "./components/testimonial_slider/testimoni_template";
import NotableAlumni from "./components/NotableAlumni/notablealumni"
import Gallery from "./components/Gallery/galleryTemplate";
import { useContext } from 'react';
import { AuthContext } from './contexts/AuthContext';
export default function Home() {
  const { isUserLoggedIn } = useContext(AuthContext);
  return (
    <div className="MainContainer">
      <HeaderTem isLoggedIn={isUserLoggedIn}></HeaderTem>
      <div>
        <VideoPlayer></VideoPlayer>
      </div>
      <div className="carouselContainer">
        <HomeScreen></HomeScreen>
      </div>
      <div>
        <EventImage></EventImage>
      </div>
      <div>
        <Gallery></Gallery>
      </div>
      <div>
        <NotableAlumni></NotableAlumni>
      </div>
      <CustomFooter></CustomFooter>
    </div>
  );
}
