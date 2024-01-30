"use client";
import React from "react";
import Home from "@/app/page";
import Gallery from "../../routes/Gallery/page"
import AboutUs from "../../routes/AboutUs/page"
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from "next/head";
import "./Header.css";
import { useRouter } from "next/navigation";
import { redirect } from "next/dist/server/api-utils";
import { usePathname } from "next/navigation";
import '@fortawesome/fontawesome-free/css/all.css';

export default function HeaderTem() {
  
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/routes/login");
  }

  const handleButtonClick = (page) => {
    router.push(`/routes/${page.toLowerCase()}`);
  };


  return (
    <>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <header>
          <div className="Header">
            <div className="containerStyles">
              <div className="logo">
                <div>
                  <img src="/logo.png" alt="logo" className="img-fluid logoImg" />
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
              <a href="/">HOME</a>
              <a href="#awards">AWARDS</a>
              <a href="/routes/Gallery">GALLERY</a>
              <a href="/routes/events">EVENTS</a>
              <a href="/routes/AboutUs">ABOUT US</a>
              <a href="#contact">CONTACT</a>
              <a className="icon" onClick={myFunction}>
                <i className="fa fa-bars"></i>
              </a>
          </div>
        </div>
    </header>
    
    </>
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