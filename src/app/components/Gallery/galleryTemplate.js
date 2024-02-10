"use client";
import React from 'react';
import './galleryTemplate.css'; // Import your CSS file for styling

const Gallery = () => {
  // Replace these image paths with your actual image paths or URLs
  const images = [
    '/2023 Alumni meet/IMG_9726.JPG',
    '/2023 Alumni meet/IMG_9726.JPG',
    '/2023 Alumni meet/IMG_9744.JPG',
    '/2023 Alumni meet/IMG_9757.JPG',
    '/2023 Alumni meet/IMG_9763.JPG',
    '/2023 Alumni meet/IMG_9726.JPG',
    '/2023 Alumni meet/IMG_9767.JPG',
    '/2023 Alumni meet/IMG_9770.JPG',
    '/2023 Alumni meet/IMG_9771.JPG',
    '/2023 Alumni meet/IMG_9777.JPG'
  ];

  return (
    <div className='main'>
      <div className="header-container">
        <h2 className="gallery-heading">Gallery</h2>
        <button className="gallery-button" onClick={() => window.location.href = "/gallery"}>
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