import React from "react";
import "./home.css"

function VideoPlayer() {
  return (
    <div className="video-container">
      <video className="video" autoPlay loop muted>
        <source src="/homevid.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoPlayer;
