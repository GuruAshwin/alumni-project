"use client";
import React from "react";
import { useState, useEffect } from "react";
import "./image.css";
import TestimonialSlider from "@/app/components/testimonial_slider/testimoni_template";

export default function EventImage() {
    return(
        <div className="imageGrid">
            <div className="imageContainer ">
                <TestimonialSlider></TestimonialSlider>
            </div>
            {/* <div className="imageContainer">
                <img src="/alumniportal.png" className="poster_img" alt="poster_img"></img>
            </div> */}
        </div>
    );
}
