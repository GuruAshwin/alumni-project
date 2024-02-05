import React from "react";
import "./footerStyles.css";
import { useRouter } from "next/navigation";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CustomFooter() {

    return(
    <>
        <footer className="container-fluid">
        <div className="f_logo">
          <div>
            <a href="/">
            <img src="/logonew1.png" alt="logo" className="img-fluid logoImg" />
            </a>
          </div>
          <a href="/">
          <div className="f_logo-text">
            <h1>SATHYABAMA</h1>
            <div className="subtitle">
              <h3>INSTITUTE OF SCIENCE AND TECHNOLOGY</h3>
              <h3>(DEEMED TO BE UNIVERSITY)</h3>
              <h3>CATEGORY-1 UNIVERSITY BY UGC</h3>
            </div>
          </div>
          </a>
        </div>
        <contact className="contact">
            <span className="bi bi-telephone-outbound-fill">&nbsp;044-2450 3150/ 51/ 52/ 54/ 55</span>
            <span className="bi bi-telephone-outbound-fill">&nbsp;044-2450 2344</span>
            <span className="bi bi-envelope">&nbsp;register@sathyabama.ac.in</span>
        </contact>
        <div className="f_links">
            <a href="/routes/events">EVENTS</a>
            <a href="/routes/Gallery">GALLERY</a>
            <a href="/routes/AboutUs">ABOUT US</a>
            <a href="/routes/contact">CONTACT</a>
        </div>
        </footer>
    </>
        
        
    )
}