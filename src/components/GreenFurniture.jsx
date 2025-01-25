import React from "react";
import style from "../components/GreenFurniture.module.css";

export default function GreenFurniture() {
  return (
    <div className="relative w-full">
      {/* Responsive image */}
      <img
        src="../../public/images/greenFurniture.png"
        alt="Green Furniture"
        className="w-full h-full object-cover"
      />
      {/* Overlay content */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/50">
        <div className="text-white text-center px-4 sm:px-8 lg:px-16">
          {/* Subtitle */}
          <p className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-6">
            Why Medly?
          </p>
          {/* Main title */}
          <h1
            className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 ${style.textAnimation}`}
          >
            A greener future for furniture
          </h1>
          {/* Paragraph */}
          <p className="text-xs sm:text-sm lg:text-base leading-relaxed max-w-2xl mx-auto">
            We take utmost care in building ultra-durable, comfy sofas with
            attention to every layer—from the frame to the upholstery fabric—
            with help from partners who help us source more sustainable and
            nontoxic materials.
          </p>
        </div>
      </div>
    </div>
  );
}
