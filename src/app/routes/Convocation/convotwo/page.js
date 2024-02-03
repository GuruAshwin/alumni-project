"use client";
import React, {useState} from "react";
import ImageTem from "@/app/components/image_template/imagetemplate";
import HeaderTem from "@/app/components/Header/Header";


export default function ConvoTwo (){
    const images=[
        "/convocation/2018/IMG_4608.JPG",
        "/convocation/2018/IMG_4611.jpg",
        "/convocation/2018/IMG_4615.jpg",
        "/convocation/2018/IMG_4616.JPG",
        "/convocation/2018/IMG_4620.JPG",
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