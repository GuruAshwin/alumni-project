// convoone.js
"use client";
import React, { useState } from "react";
import ImageTem from "@/app/components/image_template/imagetemplate";


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
    <div className="container">
      <div>
        <ImageTem images={images}></ImageTem>
      </div>
    </div>
  );
}
