import React, { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './collegesliderstyle.css';

const CollegeSlider = () => {
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
    <div className='college_slide'>
        <h1>College</h1>
      <Carousel interval={2000} className="CarouselContainer">
        <Carousel.Item className="CarouselItem">
          <img
            className="d-block m-auto img-fluid Slides mt-4 mb-4"
            src="/collegeslider1.jpeg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item className="CarouselItem">
          <img
            className="d-block m-auto img-fluid Slides mt-4 mb-4"
            src="/collegeslider2.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item className="CarouselItem">
          <img
            className="d-block m-auto img-fluid Slides mt-4 mb-4"
            src="/collegeslider3.jpg"
            alt="third slide"
          />
        </Carousel.Item>
        <Carousel.Item className="CarouselItem">
          <img
            className="d-block m-auto img-fluid Slides mt-4 mb-4"
            src="/collegeslider4.jpg"
            alt="fourth slide"
          />
        </Carousel.Item>
        {/* Add more Carousel.Items for additional images */}
      </Carousel>
    </div>
  );
};

export default CollegeSlider;
