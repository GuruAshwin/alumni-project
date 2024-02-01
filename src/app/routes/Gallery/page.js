import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderTem from "@/app/components/Header/Header";
import CustomFooter from "@/app/components/footer/footer";
import "./gallery.css"
export default function Gallery() {
    return (
        <>
        <HeaderTem></HeaderTem>
        <div className="select_page">
            <div className="Convocation container">
                <img className=" img-fluid mx-auto convo-img"
                    src="/convocation/2017/IMG_0361.jpg" 
                />
                <a className="convlink" href="/routes/Convocation">Convocation</a>
            </div>
            <div className="alumnimeet container">
                <img
                className="img-fluid max-auto convo-img" 
                src="/convocation/2017/IMG_0361.jpg"/>
                <a className="alumlink" href="/routes/Convocation">Alumni</a>
            </div>
        </div>
        <CustomFooter></CustomFooter>
        </>
    );
}