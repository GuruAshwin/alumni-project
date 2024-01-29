import React from "react";
import HeaderTem from "@/app/components/Header/Header";
import "./nomination.css"

export default function Nomination(){
    return(
        <div>
            <div>
                <HeaderTem></HeaderTem>
            </div>
            <form method="POST">
                <div className="InputFormContainer">
                    <h1>Nomination Form</h1>
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
                        <div className="buttonCon">
                            <button>SUBMIT</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>

    );
}