import React from "react";
import "./events.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderTem from "@/app/components/Header/Header";
import CustomFooter from "@/app/components/footer/footer";

export default function eventsPage() {
    return(
        <>
        <div>
            <HeaderTem></HeaderTem>
            <div className="event_page">
                <p>this is events screen</p>
                <a href="/routes/events/registration">Registration</a>
                <a href="/routes/events/nomination">Nomination</a>
            </div>
            <CustomFooter></CustomFooter>
        </div>
        </>
    )
}