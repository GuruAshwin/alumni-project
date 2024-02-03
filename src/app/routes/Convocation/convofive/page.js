"use client";
import React, {useState} from "react";
import ImageTem from "@/app/components/image_template/imagetemplate";
import HeaderTem from "@/app/components/Header/Header";


export default function ConvoThree (){
    const images=[
        "/convocation/2022/FT2A9762.JPG",
        "/convocation/2022/FT2A9767.JPG",
        "/convocation/2022/FT2A9772.JPG",
        "/convocation/2022/FT2A9776.JPG",
        "/convocation/2022/FT2A9779.JPG",
        "/convocation/2022/FT2A9784.JPG",
        "/convocation/2022/FT2A9787.JPG",
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