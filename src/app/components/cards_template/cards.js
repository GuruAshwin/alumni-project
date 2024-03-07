// CardSliderTemplate.js
import React, { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cardsTem.css';
import Image from 'next/image';

const CardSliderTemplate = ({ slides }) => {
  useEffect(() => {
    // Load Bootstrap JavaScript only on the client side
    import('bootstrap/dist/js/bootstrap.min.js').then((bootstrap) => {
      // Do any initialization here if needed
    });

    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <div className='card-slider-container'>
      <div className='carouselTitleContainer'>
      </div>
      <div className='slides'>
        <Carousel interval={2000} className='carousel-container'>
          {slides.map((slide, index) => (
            <Carousel.Item key={index} className='carousel-item'>
              <Image
                className='d-block m-auto img-fluid slides mt-4 mb-4'
                src={slide.image}
                
              />
              <h1>{slide.description}</h1>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CardSliderTemplate;
