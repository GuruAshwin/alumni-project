"use client";
import React, {useState} from "react";
import ImageTem from "@/app/components/image_template/imagetemplate";
import HeaderTem from "@/app/components/Header/Header";
import "../convocation.css"; 
import CardSliderTemplate from "@/app/components/cards_template/cards";
export default function ConvoThree (){
    const images=[
        "/convocation/2021/_AMS3257.jpg",
        "/convocation/2021/_AMS3263.JPG",
        "/convocation/2021/_AMS3269.jpg",
        "/convocation/2021/_AMS3272.JPG",
        "/convocation/2021/_AMS3274.jpg",
    ]
    const slides = [
        { image: '/convocation/2019/dr2019-01.jpg', description: 'Description for Slide 1' },
        { image: '/convocation/2019/dr2019-02.jpg', description: 'Description for Slide 2' },
        { image: '/convocation/2019/dr2019-03.jpg', description: 'Description for Slide 3' },
        { image: '/convocation/2019/dr2019-04.jpg', description: 'Description for Slide 4' },
        // Add more slides as needed
      ];

    return(
        <div>
            <HeaderTem></HeaderTem> 
            <div>
                <ImageTem images={images}></ImageTem>
            </div>
        </div>
    )
}