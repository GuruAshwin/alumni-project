import React from "react";
import "./footerStyles.css";
export default function CustomFooter() {
    return(
        <div className="footerContainer">
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
              <div className="contact">
                <p>044-2450 3150/51/52/54/55</p>
                <p>044-2450 2344</p>
                <p>registrar@sathyabama.ac.in</p>
              </div>
              <div className="features">
                <p>EVENT</p>
                <p>AWARDS</p>
                <p>GALLERY</p>
                <p>ABOUT US</p>
              </div>
        </div>
    )
}