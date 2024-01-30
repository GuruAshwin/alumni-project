import React from "react";
import "./footerStyles.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CustomFooter() {
    return(
    <>
        <footer class="container-fluid">
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
        <contact class="contact">
            <span class="bi bi-telephone-outbound-fill">&nbsp;044-2450 3150/ 51/ 52/ 54/ 55</span>
            <span class="bi bi-telephone-outbound-fill">&nbsp;044-2450 2344</span>
            <span class="bi bi-envelope">&nbsp;register@sathyabama.ac.in</span>
        </contact>
        <div class="links">
            <span> EVENT</span>
            <span>AWARDS</span>
            <span>GALLERY</span>
            <span>ABOUT US</span>
        </div>
        </footer>
    </>
        
        
    )
}