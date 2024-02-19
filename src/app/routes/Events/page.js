import React from "react";
import Nomination from "../nomination/page";
import RegistrationScreen from "../registration/page";
import HeaderTem from "@/app/components/Header/Header";
import CustomFooter from "@/app/components/footer/footer";
import "./events.css";
import Image from "next/image";
export default function Events() {
    return (
        <>
            <HeaderTem></HeaderTem>
            <div className="Wholepage">

                <div className="upcomig-events">
                    <h2>Upcoming Events</h2>
                    <Image src="/event-img.png" />
                </div>

                <h3>Application For Events:</h3>
                <div className="container">
                    <div className="each">
                        <Image src="/Events/regsitration form.jpg" alt="registration pic" />
                        <a href="/routes/registration">
                        <h4>
                            Registration Form
                        </h4>
                        <p>
                            Click here to register for the <b>Alumni Meet</b> 2024
                        </p>
                        </a>
                    </div>
                    <div className="each">
                        <Image src="/Events/nomination form (2).jpg" alt="nomination pic" />
                        <a href="/routes/nomination">
                        <h4>
                            Nomination Form
                        </h4>
                        <p>
                            Click here to nominate yourslef for the <b>Alumni Awards</b>
                        </p>
                        </a>
                    </div>
                    <div className="each">
                        <Image src="/Events/feedback (1).jpg" alt="feedback pic" />
                        <a href="">
                        <h4>
                            Feedback Form
                        </h4>
                        <p>
                            Click here to give feedback about the <b>Alumni Events</b>
                        </p>
                        </a>
                    </div>
                </div>
            </div>
            <CustomFooter></CustomFooter>
        </>
    );
}