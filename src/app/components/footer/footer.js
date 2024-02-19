import React from "react";
import "./footerStyles.css";
import { useRouter } from "next/navigation";
import '@fortawesome/fontawesome-free/css/all.css';
import Image from "next/image";
export default function CustomFooter() {

    return (
        <>
            <div className="footer">
                <div className="mainsection">
                    <div className="footlogo">
                        <Image src="/sathyabama_title.png" alt="logo" className="img-fluid w-600" />
                    </div>
                    <div className="icons">
                        <h6>Connect</h6>
                        <a href="https://www.facebook.com/SathyabamaOfficial/"><i className="fa-brands fa-facebook-f eachicons"></i></a>
                        <a href="https://twitter.com/SathyabamaSIST?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><i className="fa-brands fa-twitter eachicons"></i></a>
                        <a href="https://www.linkedin.com/school/sathyabama-institute-of-science-&-technology-chennai/?originalSubdomain=in"><i className="fa-brands fa-linkedin-in eachicons"></i></a>
                        <a href="https://www.youtube.com/channel/UCkBMqT83pxjwPhh8mUpZ0hQ"><i className="fa-brands fa-youtube eachicons"></i></a>
                    </div>
                    <div className="nav">
                        <a href="/routes/Events">EVENTS</a>
                        <a href="/routes/Gallery">GALLERY</a>
                        <a href="/routes/AboutUs">ABOUT US</a>
                        <a href="/routes/ContactUs">CONTACT</a>
                    </div>
                </div>
                <div className="credits">
                    <p>copyright@sathyabama</p>
                </div>
            </div >
        </>
    );
}