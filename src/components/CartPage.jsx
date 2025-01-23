import React from "react";
import { useContext } from "react";
import { CartContext } from "./ContextProvider";
import CartProduct from "./CartProduct";
import { totalItem, totalPrice } from "./CartReducer";

export default function CartPage() {
  const { cart } = useContext(CartContext);
  console.log(cart);
  return (
    <>
      <div className="flex flex-col">
        {cart.map((p) => (
          <CartProduct product={p} key={p.id}></CartProduct>
        ))}
      </div>
      <div className="p-2 ">
        <h5>Total Items: {totalItem(cart)}</h5>
        <h5>Total Pay: {totalPrice(cart)}</h5>
        <button>Checkout</button>
      </div>
    </>
  );
}
