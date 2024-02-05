// convoone.js
"use client";
import React, { useState } from "react";
import ImageTem from "@/app/components/image_template/imagetemplate";
import HeaderTem from "@/app/components/Header/Header";
import "../convocation.css"; 
import CardSliderTemplate from "@/app/components/cards_template/cards";

export default function ConvocationOne() {
  const images = [
    "/convocation/2017/IMG_0361.jpg",
    "/convocation/2017/IMG_0368.JPG",
    "/convocation/2017/IMG_0370.JPG",
    "/convocation/2017/IMG_0361.jpg",
    "/convocation/2017/IMG_0368.JPG",
    "/convocation/2017/IMG_0370.JPG",
    // Add more image paths as needed
  ];

  const slides = [
    { image: '/collegeslider1.jpg', description: 'Description for Slide 1' },
    { image: '/collegeslider2.jpg', description: 'Description for Slide 2' },
    { image: '/collegeslider3.jpg', description: 'Description for Slide 3' },
    { image: '/collegeslider4.jpg', description: 'Description for Slide 4' },
    // Add more slides as needed
  ];

  
  return (
    
    <div>
      <HeaderTem></HeaderTem>
      <div className="content-container">
        <div className="text-container"><h1>Convocation 2017</h1></div>
        <CardSliderTemplate slides={slides}></CardSliderTemplate>
        <ImageTem images={images}></ImageTem>
      </div>
    </div>
  );
}
