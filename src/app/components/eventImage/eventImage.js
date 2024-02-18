"use client";
import React from "react";
import { useState, useEffect } from "react";
import "./image.css";
import TestimonialSlider from "../Testimonial_slider/Testimoni_template";


export default function EventImage() {
    return(
        <div className="imageGrid">
            <div className="imageContainer ">
                <TestimonialSlider></TestimonialSlider>
            </div>
            {/* <div claTssName="imageContainer">
                <img src="/alumniportal.png" className="poster_img" alt="poster_img"></img>
            </div> */}
        </div>
    );
}
