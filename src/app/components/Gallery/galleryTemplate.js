"use client";
import React from 'react';
import './galleryTemplate.css'; // Import your CSS file for styling


const Gallery = () => {
  // Replace these image paths with your actual image paths or URLs
  const images = [
    '/04.01.14 ALUMINI MEET/DSC_0912.JPG',
    '/24.11.18 SILVER JUBLIEE ALUMINI MEET CELEBRATION (1989 TO 1993) BATCH/IMG_0600.JPG',
    '/24.11.18 SILVER JUBLIEE ALUMINI MEET CELEBRATION (1989 TO 1993) BATCH/IMG_0812.JPG',
    '/24.11.18 SILVER JUBLIEE ALUMINI MEET CELEBRATION (1989 TO 1993) BATCH/IMG_0877.JPG',
    '/12.1.19 CSE ALUMINI TALK/IMG_6218.JPG',
    '/1991-1995 ALUMNI-MEET/3Y4A7019.JPG',
    '/2023 Alumni meet/IMG_9763.JPG',
    '/1991-1995 ALUMNI-MEET/3Y4A7052.JPG',
    '/1991-1995 Alumni-Meet/3Y4A7008.JPG',
    '/convocation/2021/dr2021-01.jpg'
  ];

  return (
    <div className='main'>
      <div className="header-container">
        <h2 className="gallery-heading">Gallery</h2>
        <button className="gallery-button" onClick={() => window.location.href = "/routes/Gallery"}>
          View Gallery
        </button>
      </div>
      <div className="gallery">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;