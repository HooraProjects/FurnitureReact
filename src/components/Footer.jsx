import React from "react";
import { GrFacebookOption } from "react-icons/gr";
import { IoLogoInstagram } from "react-icons/io5";
import { FaPinterestP } from "react-icons/fa";
export default function Footer() {
  return (
    <div
      style={{ backgroundColor: "#F6F6F2" }}
      className="p-8 flex justify-between items-center list-none"
    >
      <div className="flex flex-col ">
        <h1 className="text-4xl text-gray-400 ml-8">Join our Newsletter</h1>
        <p className="text-gray-400 ml-8 mt-4">
          Join for 5% off your first order, new releases, and more.
        </p>
        <input
          type="email"
          placeholder="E-mail"
          className=" placeholder:text-slate-400 block bg-white border w-[400px] ml-8 mt-4 p-4 border-slate-300 rounded-md py-2  pr-3 shadow-sm focus:outline-none"
        />
        <input
          type="number"
          placeholder="Cell Number(Optional)"
          className=" placeholder:text-slate-400 block bg-white border w-[400px] ml-8 mt-4 p-4 border-slate-300 rounded-md py-2  pr-3 shadow-sm focus:outline-none"
        />
        <div className="flex text-gray-500 ml-8 mt-16">
          <GrFacebookOption className="m-2" />
          <IoLogoInstagram className="m-2" />
          <FaPinterestP className="m-2" />
        </div>
      </div>
      <div className="flex flex-col">
        <h4 className="p-2">Explore</h4>
        <li className="text-gray-400 p-2">
          <a>Our Story</a>
        </li>
        <li className="text-gray-400 p-2">
          <a>Craftsmanship</a>
        </li>
        <li className="text-gray-400 p-2">
          <a>Lookbook</a>
        </li>
        <li className="text-gray-400 p-2">
          <a>Blog and Home Tours</a>
        </li>
        <li className="text-gray-400 p-2">
          <a>Giving Back</a>
        </li>
        <li className="text-gray-400 p-2">
          <a>Certifications</a>
        </li>
      </div>
      <div className="flex flex-col">
        <h4 className="p-2">Helpful Tools</h4>
        <li className="text-gray-400 p-2">
          <a>FAQ</a>
        </li>
        <li className="text-gray-400 p-2">
          <a>Reviews</a>
        </li>
        <li className="text-gray-400 p-2">
          <a>Comfort Guide</a>
        </li>
        <li className="text-gray-400 p-2">
          <a>Product Care</a>
        </li>
        <li className="text-gray-400 p-2">
          <a>Shipping</a>
        </li>
        <li className="text-gray-400 p-2">
          <a>Financing</a>
        </li>
        <li className="text-gray-400 p-2">
          <a>Trade Program</a>
        </li>
      </div>
      <div className="flex flex-col">
        <h4 className="p-2">Support</h4>
        <li className="text-gray-400 p-2">
          <a href="">Contact</a>
        </li>
        <li className="text-gray-400 p-2">
          <a href="">Free Design Advice</a>
        </li>
        <li className="text-gray-400 p-2">
          <a href="">Order Tracking</a>
        </li>
        <li className="text-gray-400 p-2">
          <a href="">Warranty</a>
        </li>
        <li className="text-gray-400 p-2">
          <a href="">30-Day Trial and Returns</a>
        </li>
        <li className="text-gray-400 p-2">
          <a href="">Phone: (323) 801-6892</a>
        </li>
      </div>
    </div>
  );
}
