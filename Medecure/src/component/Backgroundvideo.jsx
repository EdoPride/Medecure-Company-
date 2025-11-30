import React from "react";
import bgVideo from "../assets/backgroundVid.mp4";

export default function BackgroundVideo() {
  return (
    <> 
    <div className="relative w-full h-screen overflow-hidden">

      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Content on top */}
      {/* <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-5xl font-bold">Welcome to My Website</h1>
        <p className="text-xl mt-4">This text sits on top of the video background</p>
      </div> */}

    </div>
    </>
  );
}
