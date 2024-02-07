// import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import HeaderTem from "@/app/components/Header/Header";
// import CustomFooter from "@/app/components/footer/footer";
// import "./gallery.css"
// export default function Gallery() {
//     return (
//         <>
//         <HeaderTem></HeaderTem>
//         <div className="select_page">
//             <div className="Convocation container">
//             <a href="/routes/Convocation"><img className=" img-fluid mx-auto convo-img"
//                     src="/convocation/2017/IMG_0361.jpg" />
//             </a>
//                 <a className="convlink" href="/routes/Convocation">Convocation</a>
//             </div>
//             <div className="alumnimeet container">
//             <a className="alumlink" href="/routes/Convocation"><img
//                 className="img-fluid max-auto convo-img" 
//                 src="/convocation/2017/IMG_0361.jpg"/>
//             </a>
//                 <a className="alumlink" href="/routes/Convocation">Alumni</a>
//             </div>
//         </div>
//         <CustomFooter></CustomFooter>
//         </>
//     );
// }
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderTem from "@/app/components/Header/Header";
import CustomFooter from "@/app/components/footer/footer";
import "./gallery.css";

export default function Gallery() {
  return (
    <>
      <HeaderTem></HeaderTem>
      <div className="select_page">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 each-container">
              <a href="/routes/Convocation">
                <img
                  className="img-fluid mx-auto convo-img"
                  src="/convocation/2017/IMG_0361.jpg"
                  alt="Convocation"
                />
              </a>
              <a className="convlink" href="/routes/Convocation">
                <h1>Convocation</h1>
              </a>
            </div>
            <div className="col-lg-6 col-md-12 each-container">
              <a href="/routes/Convocation">
                <img
                  className="img-fluid mx-auto convo-img"
                  src="/convocation/2017/IMG_0361.jpg"
                  alt="Alumni"
                />
              </a>
              <a className="alumlink" href="/routes/Convocation">
                <h1>Alumni</h1>
              </a>
            </div>
          </div>
        </div>
      </div>
      <CustomFooter></CustomFooter>
    </>
  );
}
