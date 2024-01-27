import React from "react";
import "./login.css";

export default function LoginScreen({
  children,
}) {
  return(
    <section>
      <nav>
      <div className="mainContainer">
         <div className="logo">
               <div>
                 <img src="/logo.png" alt="logo" className="logoImg"></img>
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
         <div className="loginContianer">
          <div className="login-form">
              <input placeholder="username" className="input"></input>
              <input placeholder="password" className="input"></input>
          </div>
         </div>
     </div>
      </nav>
      {children}
    </section>
  )
}

