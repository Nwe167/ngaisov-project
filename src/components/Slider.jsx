import React from "react";
import "../assets/RotateGallery.css"; // keep your custom animation file

const RotateGallery = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-[#ffffff] to-[#e81e6f] text-white">
      {/* Overlay for smooth gradient or dim effect */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Rotating cube */}
      <div className="relative z-10 lg:w-[320px] lg:h-[320px] md:w-[250px] md:h-[250px] sm:w-[180px] sm:h-[180px] w-[140px] h-[140px] [transform-style:preserve-3d] animate-[rotate_30s_linear_infinite]">
        {[
          "https://images.squarespace-cdn.com/content/v1/666fcdf1b40ced5c1847a5bb/a922cf31-62e2-42b4-99ca-e1f2f4e9e693/VITALC_COLLECTION025.jpg",
          "https://images.squarespace-cdn.com/content/v1/666fcdf1b40ced5c1847a5bb/a922cf31-62e2-42b4-99ca-e1f2f4e9e693/VITALC_COLLECTION025.jpg",
          "https://images.squarespace-cdn.com/content/v1/666fcdf1b40ced5c1847a5bb/a922cf31-62e2-42b4-99ca-e1f2f4e9e693/VITALC_COLLECTION025.jpg",
          "https://images.squarespace-cdn.com/content/v1/666fcdf1b40ced5c1847a5bb/a922cf31-62e2-42b4-99ca-e1f2f4e9e693/VITALC_COLLECTION025.jpg",
          "https://images.squarespace-cdn.com/content/v1/666fcdf1b40ced5c1847a5bb/a922cf31-62e2-42b4-99ca-e1f2f4e9e693/VITALC_COLLECTION025.jpg",
          "https://images.squarespace-cdn.com/content/v1/666fcdf1b40ced5c1847a5bb/a922cf31-62e2-42b4-99ca-e1f2f4e9e693/VITALC_COLLECTION025.jpg",
          "https://images.squarespace-cdn.com/content/v1/666fcdf1b40ced5c1847a5bb/a922cf31-62e2-42b4-99ca-e1f2f4e9e693/VITALC_COLLECTION025.jpg",
          "https://images.squarespace-cdn.com/content/v1/666fcdf1b40ced5c1847a5bb/a922cf31-62e2-42b4-99ca-e1f2f4e9e693/VITALC_COLLECTION025.jpg",
        ].map((url, i) => (
          <span key={i} style={{ "--i": i + 1 }} className="span-style">
            <img src={url} alt={`img-${i + 1}`} className="img-style" />
          </span>
        ))}
      </div>

      {/* Banner Text */}
      <div className="absolute bottom-10 text-center z-20 px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-3">Welcome to Flowbite Friday</h1>
        <p className="text-lg md:text-xl opacity-90">Experience the motion of style and creativity</p>
      </div>
    </section>
  );
};

export default RotateGallery;
