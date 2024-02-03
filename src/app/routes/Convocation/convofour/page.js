"use client";
import React, {useState} from "react";
import ImageTem from "@/app/components/image_template/imagetemplate";
import HeaderTem from "@/app/components/Header/Header";


export default function ConvoThree (){
    const images=[
        "/convocation/2021/_AMS3257.jpg",
        "/convocation/2021/_AMS3263.JPG",
        "/convocation/2021/_AMS3269.jpg",
        "/convocation/2021/_AMS3272.JPG",
        "/convocation/2021/_AMS3274.jpg",
    ]

    return(
        <div>
            <HeaderTem></HeaderTem> 
            <div>
                <ImageTem images={images}></ImageTem>
            </div>
        </div>
    )
}