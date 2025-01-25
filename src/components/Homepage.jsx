import React from "react";

export default function Homepage() {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start">
      <img
        src="../../public/images/homepage.png"
        alt="sofa homepage"
        className="w-full md:w-1/2 h-auto object-cover"
      />
      <div
        className="flex flex-col text-white text-center p-6 md:p-12"
        style={{ backgroundColor: "#55625C" }}
      >
        <p className="font-bold mt-6 md:mt-14 text-lg md:text-xl">
          Handcrafted + made to order sofas
        </p>
        <h1 className="text-2xl md:text-4xl mt-4 md:mt-6 mb-4 md:mb-6">
          Comfort, your way
        </h1>
        <p className="text-sm md:text-base leading-relaxed">
          We’ve put together everything sofa dreams are made of: enduring
          design, luxe comfort, and life-proof construction. The finishing
          touches are yours to make. Select a fabric, size, leg style, and
          filling type: plant-based latex foam with wool, cozy down with latex,
          or resilient, CertiPUR-US®-Certified foam. Getting cozy in 3-2-1...
        </p>
      </div>
    </div>
  );
}
