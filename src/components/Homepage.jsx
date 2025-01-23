import React from "react";

export default function Homepage() {
  return (
    <div className="flex  ">
      <img
        src="../../public/images/homepage.png"
        alt="sofa homepage"
        width="835px"
        height="474px"
      />
      <div
        className="flex flex-col text-white text-center p-6"
        style={{ backgroundColor: "#55625C", width: "50%" }}
      >
        <p className="font-bold mt-14">Handcrafted + made to order sofas</p>
        <h1 className="text-4xl mt-6 mb-6">Comfort, your way</h1>
        <p className="p-2 text-center">
          We’ve put together everything sofa dreams are made of: enduring
          design, luxe comfort,
          <br></br> and life-proof construction. The finishing touches are yours
          to make. Select a fabric, size,<br></br> leg style, and filling type:
          plant-based latex foam with wool, cozy down with latex, or <br></br>{" "}
          resilient, CertiPUR-US®-Certified foam.Getting cozy in 3-2-1...
        </p>
      </div>
    </div>
  );
}
