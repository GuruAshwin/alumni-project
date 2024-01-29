import React from "react";
import HeaderTem from "@/app/components/Header/Header";
import "./registrationStyles.css";

export default function RegistrationScreen() {
    return(
        <div>
            <div>
                <HeaderTem></HeaderTem>
            </div>
            <div className="InputFormContainer">
                <h1>Registration Form</h1>
                <div className="InputForm">
                    <div className="InputElem">
                        <p>Full name</p>
                        <input placeholder="Enter your name"></input>
                    </div>
                    <div className="InputElem">
                        <p>Year of passing</p>
                        <input placeholder="Enter year of passing"></input>
                    </div>
                    <div className="InputElem">
                        <p>Email ID </p>
                        <input placeholder="Enter your mail id"></input>
                    </div>
                    <div className="InputElem">
                        <p>Contact Number</p>
                        <input placeholder="Enter your number"></input>
                    </div>
                    <div className="InputElem">
                        <p>Contact Address</p>
                        <input placeholder="Enter your address"></input>
                    </div>
                    <div>
                        <button>SUBMIT</button>
                    </div>
                </div>
            </div>
        </div>
    )
}