import React from "react";
import style from "../components/GreenFurniture.module.css";

export default function GreenFurniture() {
  return (
    <div className="relative w-full">
      <img
        src="../../public/images/greenFurniture.png"
        className="w-full h-full "
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/50">
        <div className="text-white  text-center ">
          <p className="mb-8">why medly?</p>
          <h1 className={`text-4xl mb-8 ${style.textAnimation}`}>
            A greener future for furniture
          </h1>
          <p>
            We take utmost care in building ultra durable, comfy sofas with
            attention to every layer—the frame to the upholstery<br></br>{" "}
            fabric—with help from partners who help us source more sustainable
            and nontoxic materials.
          </p>
        </div>
      </div>
    </div>
  );
}
