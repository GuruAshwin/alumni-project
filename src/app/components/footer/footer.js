import React from "react";
import "./footerStyles.css";
import { useRouter } from "next/navigation";
import '@fortawesome/fontawesome-free/css/all.css';
export default function CustomFooter() {

    return (
        <>
            <div className="footer">
                <div className="mainsection">
                    <div className="footlogo">
                        <img src="/sathyabama_title.png" alt="logo" className="img-fluid w-600" />
                    </div>
                    <div className="icons">
                        <h6>Connect</h6>
                        <i className="fa-brands fa-facebook-f eachicons"></i>
                        <i className="fa-brands fa-twitter eachicons"></i>
                        <i className="fa-brands fa-linkedin-in eachicons"></i>
                        <i className="fa-brands fa-youtube eachicons"></i>

                    </div>
                    <div className="nav">
                        <a href="/routes/events">EVENTS</a>
                        <a href="/routes/Gallery">GALLERY</a>
                        <a href="/routes/AboutUs">ABOUT US</a>
                        <a href="/routes/contact">CONTACT</a>
                    </div>
                </div>
                <div className="credits">
                    <p>copyright@sathyabama</p>
                </div>
            </div >
        </>
    );
}