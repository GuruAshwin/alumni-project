'use client'
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderTem from "@/app/components/Header/Header";
import CustomFooter from "@/app/components/footer/footer";
import "./gallery.css";
import CardSliderTemplate from "@/app/components/cards_template/cards";
import Image from "next/image";
export default function Gallery() {
  const slides = [
    { image: '/sliding/IMG_9867.JPG', description: "" },
    { image: '/sliding/IMG_9868.JPG', description: '' },
    { image: '/sliding/IMG_9871.JPG', description: '' },
    { image: '/sliding/IMG_9872.JPG', description: '' },
    { image: '/sliding/IMG_9875.JPG', description: '' },
    { image: '/sliding/IMG_9878.JPG', description: '' },

    // Add more slides as needed
  ];
  return (
    <>
      <HeaderTem></HeaderTem>
      <div className="select_page">
        <h1>CONFLUENCE 2023</h1>
      <CardSliderTemplate slides={slides}></CardSliderTemplate>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-10 each-container mr-lg-2">
              <a href="/routes/Convocation">
                <Image
                  className="img-fluid convo-img"
                  src="/convocation/2017/IMG_0361.jpg"
                  alt="Convocation"
                />
              </a>
              <a className="convlink" href="/routes/Convocation">
                <h1>Convocation</h1>
              </a>
            </div>
            <div className="col-lg-5 col-md-10 each-container ml-lg-2">
              <a href="/routes/Convocation">
                <Image
                  className="img-fluid convo-img"
                  src="/sliding/IMG_9879.JPG"
                  alt="Alumni"
                />
              </a>
              <a className="alumlink" href="/routes/Convocation">
                <h1>Alumni</h1>
              </a>
            </div>
          </div>
        </div>
      </div>
      <CustomFooter></CustomFooter>
    </>
  );
}
