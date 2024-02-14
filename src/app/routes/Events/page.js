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

                <div className="upcomig-events">
                    <h2>Upcoming Events</h2>
                    <img src="/event-img.png" />
                </div>

                <h3>Application For Events:</h3>
                <div className="container">
                    <div className="each">
                        <img src="/Events/regsitration form.jpg" alt="registration pic" />
                        <h4>
                            Registration Form
                        </h4>
                        <p>
                            <a href="/routes/registration">Click here</a> to register for the <b>Alumni Meet</b> 2024
                        </p>
                    </div>
                    <div className="each">
                        <img src="/Events/nomination form (2).jpg" alt="nomination pic" />
                        <h4>
                            Nomination Form
                        </h4>
                        <p>
                            <a href="/routes/nomination">Click here</a> to nominate yourslef for the <b>Alumni Awards</b>
                        </p>
                    </div>
                    <div className="each">
                        <img src="/Events/feedback (1).jpg" alt="feedback pic" />
                        <h4>
                            Feedback Form
                        </h4>
                        <p>
                            <a href="">Click here</a> to give feedback about the <b>Alumni Events</b>
                        </p>
                    </div>
                </div>
            </div>
            <CustomFooter></CustomFooter>
        </>
    );
}