"use client";
import React from "react";
import "./convoone.css";

export default function ConvocationOne() {
  const images = [
    "/convocation/2017/IMG_0361.jpg",
    "/convocation/2017/IMG_0368.JPG",
    "/convocation/2017/IMG_0370.JPG",
    // Add more image paths as needed
  ];

  return (
    <div className="Main-container">
      {images.map((image, index) => (
        <div key={index} className="image-container">
          <img src={image} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}
