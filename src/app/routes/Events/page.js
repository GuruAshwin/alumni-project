import React from "react";
import Nomination from "../nomination/page";
import RegistrationScreen from "../registration/page";
import HeaderTem from "@/app/components/Header/Header";
import CustomFooter from "@/app/components/footer/footer";

export default function Events() {
    return (
        <>
            <HeaderTem></HeaderTem>
            <a href="./registration">Registration From</a>
            <a href="./nomination">Nomination Form</a>
            <CustomFooter></CustomFooter>
        </>
    );
}