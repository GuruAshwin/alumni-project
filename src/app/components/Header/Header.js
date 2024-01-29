"use client";
import React from "react";
import "./Header.css";
import { useRouter } from "next/navigation";
import { redirect } from "next/dist/server/api-utils";
import { usePathname } from "next/navigation";
import '@fortawesome/fontawesome-free/css/all.css';
import Gallery from "../Gallery/gallery"
export default function HeaderTem() {
  
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/routes/login");
  }

  const handleButtonClick = (page) => {
    router.push(`/routes/${page.toLowerCase()}`);
  };


  return (
    <div className="Header">
      <div className="containerStyles">
        <div className="logo">
          <div>
            <img src="/logo.png" alt="logo" className="logoImg" />
          </div>
          <div className="logo-text">
            <h1>SATHYABAMA</h1>
            <div className="subtitle">
              <h4>INSTITUTE OF SCIENCE AND TECHNOLOGY</h4>
              <h4>(DEEMED TO BE UNIVERSITY)</h4>
              <h4>CATEGORY-1 UNIVERSITY BY UGC</h4>
            </div>
          </div>
        </div>
        <div className="buttoncontainer">
        <button className="buttonStyles" onClick={handleLoginClick} >
          LOGIN
        </button>
      </div>
    </div>
      <div className="topnav" id="myTopnav">
        <a>HOME</a>
        <a>AWARDS</a>
        <a href="C:\Projects\alumuni-project\src\app\components\Gallery\gallery.js">GALLERY</a>
        <a>EVENTS</a>
        <a>ABOUTS US</a>
        <a>CONTACT</a>
        <a className="icon" onClick={myFunction}>
          <i className="fa fa-bars"></i>
        </a>
      </div>
    </div>
  );

  function myFunction() {
    var topnav = document.getElementById("myTopnav");
    if (topnav.className === "topnav") {
      topnav.className += " responsive";
    } else {
      topnav.className = "topnav";
    }
  }
}
