import React from "react";
import Nomination from "../nomination/page";
import RegistrationScreen from "../registration/page";
import HeaderTem from "@/app/components/Header/Header";
import CustomFooter from "@/app/components/footer/footer";
import "./events.css"
export default function Events() {
    return (
        <>
            <HeaderTem></HeaderTem>
            <div className="Wholepage">
                <h3>Application For Events:</h3>
                <div className="container">
                    <div className="each">
                        <img src="/Events/regsitration form.jpg" alt="registration pic"/>                  
                        <h4>
                            Registration Form
                        </h4>
                    </div>
                    <div className="each">
                        <img src="/Events/nomination form (2).jpg" alt="nomination pic"/>
                        <h4>
                            Nomination Form
                        </h4>
                    </div>
                    <div className="each">
                        <img src="/Events/feedback (1).jpg" alt="feedback pic"/>
                        <h4>
                            Feedback Form
                        </h4>
                    </div>
                </div>
            </div>
            <CustomFooter></CustomFooter>
        </>
    );
}