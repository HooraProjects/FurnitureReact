import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { CartContext } from "./ContextProvider";

export default function ProductView({ product }) {
  const { dispatch } = useContext(CartContext);
  const location = useLocation();
  const { id, name, img, price, quantity } = location.state || {}; // Access state data

  return (
    <div className="flex">
      <div className="flex justify-between items-start  flex-col">
        <img src={img} alt={name} className="w-[800px] h-[400px] " />
      </div>

      <div className="p-32">
        <p className="text-lg text-gray-500">{price}</p>
        <button
          className="py-2 px-4 text-white mt-4 bg-[#BEC1BC] hover:bg-gray-400 "
          onClick={() =>
            dispatch({
              type: "Add",
              product: { id, name, img, price, quantity },
            })
          }
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
