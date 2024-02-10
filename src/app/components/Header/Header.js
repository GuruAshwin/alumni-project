"use client";
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from "next/head";
import "./Header.css";
import { useRouter } from "next/navigation";
// import DropdownMenu from "@/app/components/dropdownmenu/dropdownmenu";
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.min.css';  


export default function HeaderTem() {
  const [user, setUser] = useState(null);
 
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
                {/* <div>
                  <a href="/"><img src="/logonew1.png" alt="logo" className="img-fluid logoImg" /></a>
                </div>
                <a href="/"> */}
                <a href="/"><img src="/sathyabama_title.png" alt="logo" className="img-fluid w-600" /></a>

                {/* <div className="logo-text">
                  <h1>SATHYABAMA</h1>
                  <div className="subtitle">
                    <h3>INSTITUTE OF SCIENCE AND TECHNOLOGY</h3>
                    <h3>(DEEMED TO BE UNIVERSITY)</h3>
                    <h3>CATEGORY-1 UNIVERSITY BY UGC</h3>
                  </div>
                </div> */}
              </div>
              <div className="buttoncontainer">
              {!user && <button className="buttonStyles" onClick={handleLoginClick} >
                LOGIN
              </button>}
            </div>
          </div>
          <div className="topnav" id="myTopnav">
              <a href="/">HOME</a>
              <a href="#awards">ALUMNI</a>
              <a href="/routes/Events">EVENTS</a>
              <a href="/routes/Gallery">GALLERY</a>
              <a href="/routes/AboutUs">ABOUT US</a>
              <a href="/routes/ContactUs">CONTACT</a>
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