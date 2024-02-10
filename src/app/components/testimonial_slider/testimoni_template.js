"use client";
import React, { useState, useEffect } from 'react';
import './TestimonialSlider.css'; // Import your CSS file

const testimonialData = [
  {
    id: 1,
    image: '/NotableAlumni/Notable alumni 1.png',
    text: "This product is amazing! I've never experienced anything like it before."
  },
  {
    id: 2,
    image: '/NotableAlumni/Notable alumni 1.png',
    text: "I highly recommend this service to anyone looking for quality and reliability."
  }
  // Add more testimonials as needed
];

const TestimonialSlider = () => {
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
          className={`testimonial ${index === currentTestimonialIndex ? 'active' : ''}`}
        >
          <img src={testimonial.image} alt={`Testimonial ${testimonial.id}`} />
          <p className="testimonial-text">{testimonial.text}</p>
        </div>
      ))}
    </div>
  );
};

export default TestimonialSlider;