import React, { useContext } from "react";
import { CiSearch } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { BsBasket3 } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "./ContextProvider";

export default function Header() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center bg-orange-50 p-6 list-none">
      <div className="text-3xl font-extralight">
        <Link to="/">medly</Link>
      </div>
      <div className="flex list-none justify-between items-center text-gray-600 font-semibold">
        <li className="mr-10">
          <a>Living</a>
        </li>
        <li className="mr-10">
          <a>Bedroom</a>
        </li>
        <li className="mr-10">
          <a>Dining</a>
        </li>
        <li className="mr-10">
          <a>About</a>
        </li>
        <li>
          <a>Order Samples</a>
        </li>
      </div>
      <div className="flex items-center">
        <li className="mr-6">
          <a>
            <CiSearch />
          </a>
        </li>
        <li className="mr-6">
          <a>
            <IoPersonOutline />
          </a>
        </li>
        <li className="relative flex items-center">
          <a>
            <BsBasket3
              onClick={() => {
                navigate("/cart");
              }}
              className="mr-6"
            />
          </a>
          {cart.length > 0 && (
            <span className="absolute top-0 right-0 bg-yellow-200 text-sm text-black rounded-full w-5 h-5 flex justify-center items-center">
              {cart.length}
            </span>
          )}
        </li>
      </div>
    </div>
  );
}
