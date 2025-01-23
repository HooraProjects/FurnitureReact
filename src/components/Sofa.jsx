import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Sofa({ id, name, price, img1, img2, quantity }) {
  console.log("Props received by Sofa:", {
    id,
    name,
    price,
    img1,
    img2,
    quantity,
  }); // Log props here
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handleClick = () => {
    // Navigate to /product and pass state
    navigate("/product", {
      state: {
        id: id,
        name: name,
        img: img1, // Pass the current image
        price: price,
        quantity: quantity, // Optional: pass the price
      },
    });
  };

  return (
    <div className="flex flex-col bg-white m-6 p-4">
      <img
        src={isHovered ? img2 : img1}
        alt="sofa"
        className="cursor-pointer w-[475px] h-[300px] "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick} // Handle click here
      />
      <div className="flex flex-col justify-center items-center">
        <p className="text-gray-600 font-bold mt-12">{name}</p>
        <p>
          <span className="text-gray-500">from</span>{" "}
          <span className="text-gray-400">{price}</span>
        </p>
      </div>
    </div>
  );
}
