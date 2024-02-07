"use client";
import React from "react";
import "./image.css";

export default function EventImage() {
    return(
        <div className="imageGrid">
            <div className="imageContainer ">
                <img src="/event-img.png" className="event_img" alt="event_img"></img>
            </div>
            <div className="imageContainer">
                <img src="/alumniportal.png" className="poster_img" alt="poster_img"></img>
            </div>
        </div>
    );
}
``