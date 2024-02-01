import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderTem from "@/app/components/Header/Header";
import CustomFooter from "@/app/components/footer/footer";
export default function Gallery() {
    return (
        <>
        <HeaderTem></HeaderTem>
        <div className="select_page">
            <div className="Convocation">
                <a target="blank" href="">
                    <img className=" img-fluid mx-auto w-70 "
                        src="/convocation/2017/IMG_0361.jpg" 
                    />
                </a>
            </div>
            <div className="alumnimeet">
            </div>
        </div>
        <CustomFooter></CustomFooter>
        </>
    );
}