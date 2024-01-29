import React, { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const ImageCarousel = () => {
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
    <div className='Slideshow'> 
      <Carousel interval={1000}>
        <Carousel.Item>
          <img
            className="d-block w-70 m-auto img-fluid Slides"
            src="/carousel-img-1.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-70 m-auto img-fluid Slides"
            src="/carousel-img-2.png"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-70 m-auto img-fluid Slides"
            src="/carousel-img-3.png"
            alt="third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-70 m-auto img-fluid Slides"
            src="/carousel-img-4.png"
            alt="fourth slide"
          />
        </Carousel.Item>
        {/* Add more Carousel.Items for additional images */}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
