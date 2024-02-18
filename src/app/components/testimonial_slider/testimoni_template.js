"use client";
import React, { useState, useEffect } from 'react';
import "./testimonialslider.css";  // Make sure this path is correct

const testimonialData = [
  {
    id: 1,
    image: '/testimonal/Mariazeena.png',
    text: "This product is amazing! I've never experienced anything like it before."
  },
  {
    id: 2,
    image: '/testimonal/Marie.jpg',
    text: "I highly recommend this service to anyone looking for quality and reliability."
  },
  {
    id: 3,
    image: '/testimonal/SASIKALA.jpg',
    text: "I highly recommend this service to anyone looking for quality and reliability."
  }
  // Add more testimonials as needed
];

function TestimonialSlider(){
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTestimonialIndex(prevIndex =>
        prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="testimonial-slider">
      {testimonialData.map((testimonial, index) => (
        <div
          key={testimonial.id}
          className={`testimonial-slide ${index === currentTestimonialIndex ? 'active' : ''}`}
        >
          <div className="testimonial-content">
            <img src={testimonial.image} alt={`Testimonial ${testimonial.id}`} className="testimonial-image" />
            <p className="testimonial-text">{testimonial.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialSlider;
