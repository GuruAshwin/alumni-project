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
          <div className="bg-img-container">
            <img src="/background-img.png" className="bg-img"></img>
          </div>
          <div className="login-form">
              <div className="slogo">
                <div>
                  <img src="/logo.png" alt="logo" className="slogoImg"></img>
                </div>
                <div className="s-logo-text">
                  <h1>SATHYABAMA</h1>
                  <div className="s-subtitle">
                    <h4>INSTITUTE OF SCIENCE AND TECHNOLOGY</h4>
                    <h4>(DEEMED TO BE UNIVERSITY)</h4>
                    <h4>CATEGORY-1 UNIVERSITY BY UGC</h4> 
                  </div>
                </div>
              </div>
              <div className="inputComponent">
                  <div className="inputelement">
                    <text className="label">USERNAME</text>
                    <input placeholder="username" className="input"></input>
                  </div>
                  <div className="inputelement">
                    <text className="label">PASSWORD</text>
                    <input placeholder="password" className="input"></input>
                  </div>
                  <div className="button">
                    <button>LOGIN</button>
                  </div>
                  <div className="subtext">
                    <p>forgot password</p>
                    <a>click here</a>
                  </div>
              </div> 
          </div>
         </div>
     </div>
      </nav>
      {children} 
    </section>
  )
}
