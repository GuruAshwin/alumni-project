"use client";
import React, {useState} from "react";
import ImageTem from "@/app/components/image_template/imagetemplate";
import HeaderTem from "@/app/components/Header/Header";


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

    return(
        <div>
            <HeaderTem></HeaderTem> 
            <div>
                <ImageTem images={images}></ImageTem>
            </div>
        </div>
    )
}