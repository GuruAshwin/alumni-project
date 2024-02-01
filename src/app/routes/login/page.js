'use client'
import { useState } from "react";
import React from "react";
import "./login.css";
import { useRouter } from "next/navigation";
import HomeScreen from "@/app/components/LandingPage/HomeScreen";


export default function LoginScreen(){
  const [formData,setFormData]=useState({
    reg_no:'',
    password:'',
  });

  const router1 = useRouter();


  const handleLoginClick =async () => {
    try{
      const response=await fetch('http://127.0.0.1:8000/alumniapi/register-user/',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(formData),
      
  });
  router1.push()
  const data=await response.json();
  console.log('Response from server',data);
}catch(error){
  console.error('Error',error)
}
};
const handleInputChange=(e) => {
  const{name,value}= e.target;
  setFormData((prevFormData)=>({
    ...prevFormData,
    [name]:value,
  }));
};

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
              <form>
                <div className="inputComponent">
                    <div className="inputelement">
                      <text className="label"></text>
                      <input 
                      placeholder="Enter register no" 
                      onChange={handleInputChange}
                      value={formData.reg_no}
                      name="reg_no" 
                      className="input"
                      required
                      ></input>
                    </div>
                    <div className="inputelement">
                      <text className="label">PASSWORD</text>
                      <input 
                      placeholder="password" 
                      name="password" 
                      className="input"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                      ></input>
                    </div>
                    <div className="button">
                      <button onClick={handleLoginClick} >LOGIN</button>
                    </div>
                    <div className="subtext">
                      <p>forgot password</p>
                      <a>click here</a>
                    </div>
                </div> 
              </form>
              
          </div>
         </div>
     </div>
      </nav>
    </section>
  )
}

