import React from "react";
import HeaderTem from "@/app/components/Header/Header";

export default function eventsPage() {
    return(
        <div>
            <div>
                <HeaderTem></HeaderTem>
            </div>
            <p>this is events screen</p>
            <a href="/routes/events/registration">Registration</a>
        </div>
    )
}