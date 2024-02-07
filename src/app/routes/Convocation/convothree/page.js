"use client";
import React, {useState} from "react";
import ImageTem from "@/app/components/image_template/imagetemplate";
import HeaderTem from "@/app/components/Header/Header";
import "../convocation.css"; 
import CardSliderTemplate from "@/app/components/cards_template/cards";


export default function ConvoThree (){
    const images=[
        "/convocation/2019/SBUV2524.JPG",
        "/convocation/2019/SBUV2526.JPG",
        "/convocation/2019/SBUV2531.JPG",
        "/convocation/2019/SBUV2544.JPG",
        "/convocation/2019/SBUV2550.JPG",
        "/convocation/2019/SBUV2558.JPG",
        "/convocation/2019/SBUV2560.JPG",
        "/convocation/2019/SBUV2566.JPG",
        "/convocation/2019/SBUV2570.JPG",
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
            <div className="content-container">
            <div className="text-container"><h1>Convocation 2019</h1></div>
                <CardSliderTemplate slides={slides}></CardSliderTemplate>
                <ImageTem images={images}></ImageTem>
            </div>
        </div>
    )
}