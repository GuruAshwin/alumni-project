import React from "react";
import HeaderTem from "@/app/components/Header/Header";
// import "./nomination.css"

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
                            <p>First name</p>
                            <input placeholder="Enter your name"></input>
                            <p>Middle name</p>
                            <input placeholder="Enter your name"></input>
                            <p>Last name</p>
                            <input placeholder="Enter your name"></input>
                        </div>
                        <div className="InputElem">
                            <p>Year of passing</p>
                            <input placeholder="Enter year of passing"></input>
                            <p>Contact Number</p>
                            <input placeholder="Enter your number"></input>                            
                        </div>
                        <div className="InputElem">
                            <p>Email ID </p>
                            <input placeholder="Enter your mail id"></input>
                        </div>
                        <div className="InputElem">
                            <p>Contact Address</p>
                            <input placeholder="Enter your address"></input>
                        </div>
                        <div className="InputElem">
                            <h1>Confluence 2024 - ALUMNI AWARDS - CALL FOR NOMINATIONS</h1>
                            <p>Award Catagories</p>
                            
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