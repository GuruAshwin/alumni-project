"use client";
import React, {useState} from "react";
import ImageTem from "@/app/components/image_template/imagetemplate";
import HeaderTem from "@/app/components/Header/Header";
import "../convocation.css"; 
import CardSliderTemplate from "@/app/components/cards_template/cards";


export default function ConvoTwo (){
    const images=[
        "/convocation/2018/IMG_4608.JPG",
        "/convocation/2018/IMG_4611.jpg",
        "/convocation/2018/IMG_4615.jpg",
        "/convocation/2018/IMG_4616.JPG",
        "/convocation/2018/IMG_4620.JPG",
    ]
    const slides = [
        { image: '/convocation/2018/dr2018-01.jpg', description: 'Description for Slide 1' },
        { image: '/convocation/2018/dr2018-02.jpg', description: 'Description for Slide 2' },
        // Add more slides as needed
      ];

    return(
        <div>
            <HeaderTem></HeaderTem> 
            <div className="content-container">
            <div className="text-container"><h1>Convocation 2018</h1></div>
                <CardSliderTemplate slides={slides}></CardSliderTemplate>
                <ImageTem images={images}></ImageTem>
            </div>
        </div>
    )
}