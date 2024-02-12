import React from "react";
import "./footerStyles.css";
import { useRouter } from "next/navigation";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CustomFooter() {

    return(
    <>
        <footer className="container-fluid mb-0">
        <img src="/sathyabama_title.png" alt="logo" className="img-fluid w-600" />
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