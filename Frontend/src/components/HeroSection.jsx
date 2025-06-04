import React, { useState, useEffect } from "react";

export default function HeroSection() {
  const videos = [
    {
      src: "/images/new_c.mp4",
      heading: "Access Anytime, Anywhere",
      subheading: "Empowering You with Data on Demand Across Devices.",
    },
    {
      src: "/images/video2.mp4",
      heading: "All Your Information in One Place",
      subheading: "Simplify Management with a Unified Data Platform.",
    },
    {
      src: "/images/less.mp4",
      heading: "Smart Solutions for Smart Businesses",
      subheading: "Harness Insights to Make Data-Driven Decisions.",
    },
  ];

  const [activeVideo, setActiveVideo] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  // Change video every 6s
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveVideo((prev) => (prev + 1) % videos.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Show video after short delay (text first)
  useEffect(() => {
    setShowVideo(false);
    const timeout = setTimeout(() => {
      setShowVideo(true);
    }, 500); // delay video by 500ms
    return () => clearTimeout(timeout);
  }, [activeVideo]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Delayed Video */}
      {videos.map((video, idx) => (
        <video
          key={idx}
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
            idx === activeVideo && showVideo ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          autoPlay
          loop
          muted
        >
          <source src={video.src} type="video/mp4" />
        </video>
      ))}

      {/* Always visible Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-20">
        <p
          className="text-white text-4xl md:text-6xl font-bold opacity-100 transition-opacity duration-500"
          style={{ textShadow: "rgba(0, 0, 0, 0.5) 2px 2px 4px" }}
        >
          {videos[activeVideo].heading}
        </p>
        <h2
          className="text-white font-bold text-sm md:text-lg mt-4 opacity-100 transition-opacity duration-500"
          style={{ textShadow: "rgba(0, 0, 0, 0.5) 2px 2px 4px" }}
        >
          {videos[activeVideo].subheading}
        </h2>
      </div>

      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 md:bottom-[350px] md:right-4 md:left-auto md:transform-none md:flex-col md:space-x-0 md:space-y-2 z-30">
        {videos.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveVideo(idx)}
            className={`w-4 h-4 rounded-full border border-gray-300 ${
              idx === activeVideo ? "bg-red-600" : "bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

