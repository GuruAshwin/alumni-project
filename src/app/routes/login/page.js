'use client'
import { useState } from "react";
import React from "react";
import "./login.css";
import { useRouter } from "next/navigation";
import HomeScreen from "@/app/components/LandingPage/HomeScreen";


export default function LoginScreen(){

const handleFormData= async()=>{
  
}
  
return(
    <section>
      <nav>
      <div className="mainContainer">
         <div className="logo"> 
               <div>
                 <img src="/logonew1.png" alt="logo" className="logoImg"></img>
               </div>
               <div className="logo-text">
                 <h1>SATHYABAMA</h1>
                 <div className="subtitle">
                   <h3>INSTITUTE OF SCIENCE AND TECHNOLOGY</h3>
                   <h3>(DEEMED TO BE UNIVERSITY)</h3>
                   <h3>CATEGORY-1 UNIVERSITY BY UGC</h3> 
                 </div>
               </div>
         </div>
         <div className="loginContianer">
          <div className="bg-img-container">
            <img src="/background-img.png" className="bg-img"></img>
          </div>
          <div className="login-form">
              <div className="slogo">
                <div className="sathyabama_logo">
                  <div>
                    <img src="/logonew1.png" alt="logo" className="slogoImg"></img>
                  </div>
                  <div className="s-logo-text">
                    <h1>SATHYABAMA</h1>
                    <div className="s-subtitle">
                      <h3>INSTITUTE OF SCIENCE AND TECHNOLOGY</h3>
                      <h3>(DEEMED TO BE UNIVERSITY)</h3>
                      <h3>CATEGORY-1 UNIVERSITY BY UGC</h3> 
                    </div>
                  </div>
                </div>
                <form action={'http://127.0.0.1:8000/alumniapi/login-user'} method="POST">
                <div className="inputComponent">
                    <div className="inputelement">
                      <text className="label">REGSITER NUMBER</text>
                      <input 
                      placeholder="Enter register no" 
                      
                      name="username" 
                      className="input"
                      required
                      ></input>
                    </div>
                    <div className="inputelement">
                      <text className="label">PASSWORD</text>
                      <input 
                      placeholder="Password" 
                      name="password" 
                      className="input"
                      required
                      ></input>
                    </div>
                    <div className="button">
                      <button>LOGIN</button>
                    </div>
                    <div className="subtext">
                      <p>Forgot Password! </p>
                      <a href="#">Click here</a>
                    </div>
                    <div className="regi">
                      <a href="#">Create New Account</a>
                    </div>
                </div> 
              </form>
              </div>
          </div>
         </div>
     </div>
      </nav>
    </section>
  )
}
