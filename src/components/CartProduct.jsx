import React, { useContext } from "react";
import { CartContext } from "./ContextProvider";

export default function CartProduct({ product }) {
  const { cart, dispatch } = useContext(CartContext);
  const Increase = (id) => {
    const index = cart.findIndex((p) => p.id === id);
    if (cart[index].quantity < 10) {
      dispatch({ type: "Increase", id });
    }
  };
  const Decrease = (id) => {
    const index = cart.findIndex((p) => p.id === id);
    if (cart[index].quantity > 1) {
      dispatch({ type: "Decrease", id });
    }
  };
  console.log(product);
  return (
    <div className="flex border mt-4 mb-3">
      <img src={product.img} style={{ width: "300px", height: "300px" }} />
      <div className="p-16">
        <h4 className="text-gray-500">{product.name}</h4>
        <h5 className="text-gray-600">${product.price}</h5>
        <div>
          <button
            className="rounded-md bg-gray-400 text-white p-2 mr-2"
            onClick={() => Decrease(product.id)}
          >
            -
          </button>
          <span className="mr-2">{product.quantity}</span>
          <button
            className="rounded-md bg-gray-400 text-white p-2"
            onClick={() => Increase(product.id)}
          >
            +
          </button>
        </div>
        <button
          onClick={() => {
            console.log("Product received:", product); // Debug log
            dispatch({ type: "Remove", id: product.id });
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
