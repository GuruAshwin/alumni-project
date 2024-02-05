// convoone.js
"use client";
import React, { useState } from "react";
import ImageTem from "@/app/components/image_template/imagetemplate";
import HeaderTem from "@/app/components/Header/Header";
import "../convocation.css"; 

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

  
  return (
    
    <div>
      <HeaderTem></HeaderTem>
      <div className="content-container">
        <div className="text-container"><h1>Convocation 2017</h1></div>
        <ImageTem images={images}></ImageTem>
      </div>
    </div>
  );
}
